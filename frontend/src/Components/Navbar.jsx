// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <h1 className="font-bold">Disaster Relief App</h1>
    <div>
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/user-login" className="mr-4">User Login</Link>
      <Link to="/volunteer-login">Volunteer Login</Link>
    </div>
  </nav>
);

export default Navbar;
