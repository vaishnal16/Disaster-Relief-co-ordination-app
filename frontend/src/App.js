import React from 'react';
import Home from './Components/Home';
import UserLogin from './Components/UserLogin';
import VolunteerLogin from './Components/VolunteerLogin';
import UserSignup from  './Components/UserSignup';
import  VolunteerSignup from './Components/VolunteerSignup';
import UserDashboard  from './Components/UserDashboard';
import VolunteerDashboard from './Components/VolunteerDashboard';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProtectedRoute from  './Components/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/volunteer-login" element={<VolunteerLogin />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/volunteer-signup" element={<VolunteerSignup />} />
            {/* Protected Routes */}
            <Route
                path="/user-dashboard"
                element={
                    <ProtectedRoute>
                        <UserDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/volunteer-dashboard"
                element={
                    <ProtectedRoute>
                        <VolunteerDashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
