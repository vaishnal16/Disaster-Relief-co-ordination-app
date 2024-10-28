// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100">
    <h1 className="text-3xl font-bold text-gray-800">Disaster Relief Coordination App</h1>
    <p className="text-gray-600">Get started by selecting your role:</p>
    <div className="flex space-x-8">
      <div className="flex flex-col space-y-4">
        <Link to="/user-login" className="bg-blue-500 text-white px-4 py-2 rounded">User Log In</Link>
        <p className="text-gray-600">Don't have an account? <Link to="/user-signup" className="text-blue-500 underline">Sign Up</Link></p>
      </div>
      <div className="flex flex-col space-y-4">
        <Link to="/volunteer-login" className="bg-green-500 text-white px-4 py-2 rounded">Volunteer Log In</Link>
        <p className="text-gray-600">Don't have an account? <Link to="/volunteer-signup" className="text-green-500 underline">Sign Up</Link></p>
      </div>
    </div>
  </div>
);

export default Home;
