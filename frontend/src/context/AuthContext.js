import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create axios instance with custom config
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check token on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          // Verify token with backend
          const { data } = await api.get('/users/verify');
          setUser(data.user);
          setIsAuthenticated(true);
        } catch (err) {
          console.error('Token verification failed:', err);
          localStorage.removeItem('token');
          delete api.defaults.headers.common['Authorization'];
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const handleError = (error) => {
    console.error('Auth Error:', error);
    const errorMessage = error.response?.data?.message || 
                        error.message || 
                        'An error occurred. Please try again.';
    setError(errorMessage);
    throw new Error(errorMessage);
  };

  const register = async (userData, isVolunteer = false) => {
    try {
      setError(null);
      const endpoint = isVolunteer ? '/volunteers/register' : '/users/register';
      
      const response = await api.post(endpoint, userData);
      const { data } = response;

      if (data.token) {
        localStorage.setItem('token', data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        setUser(data.user);
        setIsAuthenticated(true);
      }
      
      return data;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      handleError(error);
    }
  };

  const login = async (credentials, isVolunteer = false) => {
    try {
      setError(null);
      const endpoint = isVolunteer ? '/volunteers/login' : '/users/login';
      
      const { data } = await api.post(endpoint, credentials);
      
      localStorage.setItem('token', data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setUser(data.user);
      setIsAuthenticated(true);
      
      return data;
    } catch (error) {
      handleError(error);
    }
  };

  const logout = async () => {
    try {
      // Optional: Call backend logout endpoint
      // await api.post('/users/logout');
      
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Axios interceptor for handling token expiration
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        logout();
      }
      return Promise.reject(error);
    }
  );

  if (loading) {
    return null; // or a loading spinner
  }

  return (
    <AuthContext.Provider 
      value={{
        user,
        isAuthenticated,
        loading,
        error,
        register,
        login,
        logout,
        setError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;