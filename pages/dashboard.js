// AdminDashboard.js

import React from 'react';
import DashboardStats from '../components/Dashboard/DashboardStats';
import Sidebar from '../components/Dashboard/Sidebar';
import RecentActivity from '../components/Dashboard/RecentActivity';
import SystemHealth from '../components/Dashboard/SystemHealth';
import Announcements from '../components/Dashboard/Announcements';

const AdminDashboard = () => {
  // Placeholder data for widgets, activity log, system health, and announcements
  const widgetData = {
    totalPosts: 150,
    totalUsers: 50,
    newComments: 25,
  };

  const recentActivity = [
    'User John Doe registered.',
    'New post published: "Lorem Ipsum".',
    'Comment received on post: "Lorem Ipsum".',
    // Add more activity log entries as needed
  ];

  const systemHealth = {
    cpuUsage: '70%',
    memoryUsage: '60%',
    storageUsage: '50%',
  };

  const announcements = [
    'Important update: Please check the new features added.',
    'Scheduled maintenance on January 15th, 2024.',
    // Add more announcements as needed
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-4/5 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
          {/* User Profile Section */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-full mr-2"
            />
            <span className="text-sm font-semibold">Admin User</span>
          </div>
        </div>

        {/* Widgets Section */}
        <DashboardStats data={widgetData} />

        {/* Additional Sections */}
        <RecentActivity activityLog={recentActivity} />
        <SystemHealth systemData={systemHealth} />
        <Announcements announcements={announcements} />

      
      </div>
    </div>
  );
};

export default AdminDashboard;
