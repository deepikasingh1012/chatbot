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
<<<<<<< HEAD
      <Sidebar />
      <div style={{ flex: 1 }}>
        {isAuthenticated ? <DashboardContent /> : <Visitor />}
       
      </div>
    </div>
  );
=======
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
>>>>>>> 822994c02dcad9991835fc8ebc085a0619c59608
}
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import DashboardContent from "../comp/DashboardContent"; 
// import Sidebar from "../comp/Sidebar";
// import TotalTicket from "../comp/TotalTicket";
// import OpenTicket from "../comp/OpenTicket";
// import ClosedTicket from "../comp/ClosedTicket";
// import RatedTicket from "../comp/RatedTicket";
// import AnsweredTicket from "../comp/AnsweredTicket";
// import UnAnsweredTicket from "../comp/UnAnsweredTicket";
// import GetUserConversation from "../comp/GetUserConversation";
// import Visitor from './Visitor';

// const DashboardLayout = () => {
//   const isAuthenticated = false;  // Replace with your actual authentication check

//   return (
//     <div className="dashboard-layout" style={{ display: "flex", minHeight: "100vh" }}>
//       <Sidebar />
//       <div className="main-content" style={{ flex: 1, padding: "20px" }}>
      
//        {isAuthenticated ? <DashboardContent /> : <Visitor />}
       
//       </div>
//         // <TotalTicket/>
//         // <OpenTicket/>
//         // <AnsweredTicket/>
//         // <UnAnsweredTicket/>
//         // <ClosedTicket/>
//         // <RatedTicket/>
//         <Outlet />
//       </div>
    
//   );
// };

// export default DashboardLayout;
