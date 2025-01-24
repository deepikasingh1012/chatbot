import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../comp/DashboardLayout";
import DashboardContent from "../comp/DashboardContent";
import Sidebar from "../comp/Sidebar";
import Visitor from "../comp/Visitor";
import Tickets from "../comp/Tickets";
import TotalTicket from "../comp/TotalTicket";
<<<<<<< HEAD
import OpenTicket from "../comp/OpenTicket";
=======
import NewTicket from "../comp/NewTicket";
>>>>>>> 822994c02dcad9991835fc8ebc085a0619c59608
import ClosedTicket from "../comp/ClosedTicket";
import RatedTicket from "../comp/RatedTicket";
import AnsweredTicket from "../comp/AnsweredTicket";
import UnAnsweredTicket from "../comp/UnAnsweredTicket";
<<<<<<< HEAD
import UserConversation from "../comp/UserConversation";

=======
import GetUserConversation from "../comp/GetUserConversation";
import LoginPage from "../comp/LoginPage";
>>>>>>> 822994c02dcad9991835fc8ebc085a0619c59608

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
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
=======
        {/* Public Route: Login */}
        <Route path="/" element={<LoginPage />} />

   
        <Route path="/dashboardlayout" element={<DashboardLayout />}>
         
          <Route path="dashboardcontent" element={<DashboardContent />} />
          <Route path="/visitor" element={<Visitor />} />
          <Route path="sidebar" element={<Sidebar />} />
        </Route>

        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/TotalTicket" element={<TotalTicket />} />
        <Route path="/NewTicket" element={<NewTicket />} />
        <Route path="/AnsweredTicket" element={<AnsweredTicket />} />
        <Route path="/UnAnsweredTicket" element={<UnAnsweredTicket />} />
        <Route path="/ClosedTicket" element={<ClosedTicket />} />
        <Route path="/RatedTicket" element={<RatedTicket />} />
        <Route path="/get_user_conversation" element={<GetUserConversation />} />
>>>>>>> 822994c02dcad9991835fc8ebc085a0619c59608
        
      </Routes>
    </BrowserRouter>
  );
}
