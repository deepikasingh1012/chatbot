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


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
        {/* <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/> */}
        <Route path="/visiter" element={<Visitor/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/dashboardcontent" element={<DashboardContent />} />
          <Route path="/tickets" element={<Tickets/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

