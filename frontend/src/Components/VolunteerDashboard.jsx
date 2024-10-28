// src/components/VolunteerDashboard.jsx
import React from 'react';

const VolunteerDashboard = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
    <div className="w-full max-w-md">
      <form className="flex flex-col space-y-4 mt-4">
        <input
          type="text"
          placeholder="Resource Name"
          className="border border-gray-300 rounded p-2"
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border border-gray-300 rounded p-2"
          required
        />
        <textarea
          placeholder="Description"
          className="border border-gray-300 rounded p-2"
          rows="3"
          required
        ></textarea>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Add Resource</button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">View Requests</h3>
        <ul className="border border-gray-300 rounded mt-2 p-2 space-y-2">
          <li className="border-b border-gray-200 py-2">User Request 1: Food Supplies</li>
          <li className="border-b border-gray-200 py-2">User Request 2: Medical Aid</li>
          <li className="border-b border-gray-200 py-2">User Request 3: Temporary Housing</li>
          <li className="py-2">User Request 4: Water Supplies</li>
        </ul>
      </div>
    </div>
  </div>
);

export default VolunteerDashboard;
