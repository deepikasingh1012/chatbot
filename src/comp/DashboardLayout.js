import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../comp/Sidebar";
import DashboardContent from "../comp/DashboardContent";
import Visitor from "./Visitor";

export default function DashboardLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (for example, in localStorage)
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      navigate("/");  // Redirect to login page if not authenticated
    }
  }, [navigate]);

  return (
    <div style={{ display: "flex" }}>
    {isAuthenticated ? (
      <>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <DashboardContent />
        </div>
      </>
    ) : (
      <Visitor /> // Show the Visitor component if not authenticated
    )}
  </div>
);
}

