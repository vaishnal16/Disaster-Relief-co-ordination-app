// src/components/UserDashboard.jsx
import React from 'react';

const UserDashboard = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
    <div className="w-full max-w-md">
      <form className="flex flex-col space-y-4 mt-4">
        <input
          type="text"
          placeholder="Type of Aid Needed"
          className="border border-gray-300 rounded p-2"
          required
        />
        <textarea
          placeholder="Additional Details"
          className="border border-gray-300 rounded p-2"
          rows="3"
          required
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit Request</button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Available Resources</h3>
        <ul className="border border-gray-300 rounded mt-2 p-2 space-y-2">
          <li className="border-b border-gray-200 py-2">Food Supplies</li>
          <li className="border-b border-gray-200 py-2">Medical Kits</li>
          <li className="border-b border-gray-200 py-2">Water Bottles</li>
          <li className="py-2">Temporary Housing Options</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Live Updates</h3>
        <p className="border border-gray-300 rounded p-2 mt-2">Latest updates on relief efforts will be displayed here.</p>
      </div>
    </div>
  </div>
);

export default UserDashboard;
