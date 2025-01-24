// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import DashboardContent from "../comp/DashboardContent";
// import DashboardLayout from "../comp/DashboardLayout";
// import Sidebar from "../comp/Sidebar";
// import Visitor from "../comp/Visitor";
// export default function Router() {
//   return (
//     <div>
//       <BrowserRouter>
//      <Routes>
//         <Route path="/sidebar" element={<Visitor />}> 
//         <Route path="/dashboardContent" element={<DashboardContent/>}/> 
//         <Route path="/sidebar" element={<Sidebar/>}/>
//         <Route path="/dashboardLayout" element={<DashboardLayout/>}/> 

//         </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../comp/DashboardLayout";
import DashboardContent from "../comp/DashboardContent";  // Child component for dashboard
import Sidebar from "../comp/Sidebar";
// import Header from "../comp/Header";
// import Footer from "../comp/Footer";
import Visitor from "../comp/Visitor";
import Tickets from "../comp/Tickets";
import TotalTicket from "../comp/TotalTicket";
import OpenTicket from "../comp/OpenTicket";
import ClosedTicket from "../comp/ClosedTicket";
import RatedTicket from "../comp/RatedTicket";
import AnsweredTicket from "../comp/AnsweredTicket";
import UnAnsweredTicket from "../comp/UnAnsweredTicket";
import UserConversation from "../comp/UserConversation";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
        {/* <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/> */}
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/visitor" element={<Visitor />} />
          <Route path="/dashboardcontent" element={<DashboardContent />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/TotalTicket" element={<TotalTicket/>}/>
          <Route path="/OpenTicket" element={<OpenTicket/>}/>
          <Route path="/AnsweredTicket" element={<AnsweredTicket/>}/>
          <Route path="/UnAnsweredTicket" element={<UnAnsweredTicket/>}/>
          <Route path="/ClosedTicket" element={<ClosedTicket/>}/>
          <Route path="/RatedTicket" element={<RatedTicket/>}/>
          <Route path="/user_conversation" element={<UserConversation />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

