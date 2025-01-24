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
