import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../comp/DashboardLayout";
import DashboardContent from "../comp/DashboardContent";
import Sidebar from "../comp/Sidebar";
import Visitor from "../comp/Visitor";
import Tickets from "../comp/Tickets";
import TotalTicket from "../comp/TotalTicket";
import NewTicket from "../comp/NewTicket";
import ClosedTicket from "../comp/ClosedTicket";
import RatedTicket from "../comp/RatedTicket";
import AnsweredTicket from "../comp/AnsweredTicket";
import UnAnsweredTicket from "../comp/UnAnsweredTicket";
import GetUserConversation from "../comp/GetUserConversation";
import LoginPage from "../comp/LoginPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
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
        
      </Routes>
    </BrowserRouter>
  );
}
