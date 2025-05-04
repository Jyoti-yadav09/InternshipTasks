// pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Hello, <span className="font-semibold text-blue-700">{user?.name || 'User'}</span>! 👋
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">👥 Users</h3>
            <p className="text-3xl mt-2 font-bold">120</p>
          </div>

          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">📩 Messages</h3>
            <p className="text-3xl mt-2 font-bold">45</p>
          </div>

          <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">📝 Notes</h3>
            <p className="text-3xl mt-2 font-bold">30</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✅ You logged in successfully</li>
            <li>🆕 Registered a new user</li>
            <li>🔒 Accessed protected dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
