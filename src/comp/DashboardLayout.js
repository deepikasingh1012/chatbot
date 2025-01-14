import React from 'react';
import Sidebar from "../comp/Sidebar";
import DashboardContent from "../comp/DashboardContent";
import Visitor from './Visitor';

export default function DashboardLayout() {
  const isAuthenticated = false;  // Replace with your actual authentication check

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        {isAuthenticated ? <DashboardContent /> : <Visitor />}
      </div>
    </div>
  );
}

