// import React from 'react';
// import './Tickets.css'; // Import the CSS file

// export default function Tickets() {
//   const ticketCategories = [
//     { label: "Open Tickets", count: 23, color: "primary" },
//     { label: "Closed Tickets", count: 1, color: "secondary" },
//     { label: "Answered Tickets", count: 1, color: "info" },
//     { label: "Unanswered Tickets", count: 20, color: "warning" },
//   ];

//   const recentTickets = [
//     { id: 1, title: "Final Redire", updated: "2015-11-03 13:18:19", action: "Solved", status: "Opened" },
//     { id: 2, title: "Redirection Test", updated: "2015-11-03 11:21:56", action: "Answered", status: "Opened" },
//     { id: 3, title: "Electricity Issue", updated: "2015-11-03 11:03:28", action: "Solved", status: "Opened" },
//     { id: 4, title: "Fina 3", updated: "2015-11-03 09:05:55", action: "Unanswered", status: "Closed" },
//     { id: 5, title: "Final 2 Red", updated: "2015-09-16 12:37:04", action: "New Ticket", status: "Opened" },
//   ];

//   return (
//     <div className="container mt-4">
//       {/* Ticket Categories Section */}
//       <div className="row mb-4">
//         <div className="col-12 text-center">
//           <h1 className="mb-4">Ticket Categories</h1>
//         </div>
//       </div>

//       <div className="row justify-content-center mb-4">
//   {ticketCategories.map((ticket, index) => (
//     <div key={index} className="col-md-3 mb-3">
//       <div className="badge-container">
//         <span className={`badge bg-${ticket.color}`}>
//           {ticket.label}: {ticket.count}
//         </span>
//       </div>
//     </div>
//   ))}
// </div>


//       {/* Recent Tickets Table Section */}
//       <div className="table-container mt-5">
//         <div className="row">
//           <div className="col-12">
//             <h4 className="mb-4">Recent Tickets</h4>
//             <table className="table table-bordered">
//               <thead className="thead-light">
//                 <tr>
//                   <th>#</th>
//                   <th>Title</th>
//                   <th>Updated</th>
//                   <th>Action</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {recentTickets.map((ticket) => (
//                   <tr key={ticket.id}>
//                     <td>{ticket.id}</td>
//                     <td>{ticket.title}</td>
//                     <td>{ticket.updated}</td>
//                     <td>
//                       <span className={`badge bg-${getBadgeColor(ticket.action)}`}>
//                         {ticket.action}
//                       </span>
//                     </td>
//                     <td>
//                       <span className={`badge bg-${getBadgeColor(ticket.status)}`}>
//                         {ticket.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper function to determine badge color based on action or status
// function getBadgeColor(type) {
//   if (!type) return "secondary"; // Default badge color
//   switch (type.toLowerCase()) {
//     case "solved":
//       return "success";
//     case "answered":
//       return "info";
//     case "unanswered":
//       return "warning";
//     case "new ticket":
//       return "danger";
//     case "closed":
//       return "danger";
//     case "opened":
//       return "primary";
//     default:
//       return "secondary";
//   }
// }


import React from 'react';
import { FaBriefcase, FaEnvelope, FaUnlock, FaLock, FaArrowAltCircleLeft, FaCheckCircle, FaRegThumbsUp, FaStar } from 'react-icons/fa';


export default function Tickets() {
    const tickets = [
        { id: 1, title: 'final redire', updated: '2015-11-03 13:18:19', action: 'Solved', status: 'Opened' },
        { id: 2, title: 'redirection test', updated: '2015-11-03 11:21:56', action: 'Answered', status: 'Opened' },
        { id: 3, title: 'electricity issue', updated: '2015-11-03 11:03:28', action: 'Solved', status: 'Opened' },
        { id: 4, title: 'fina 3', updated: '2015-11-03 09:05:55', action: 'Unanswered', status: 'Closed' },
        { id: 5, title: 'final 2 red', updated: '2015-09-16 12:37:04', action: 'New Ticket', status: 'Opened' },
      ];
  return (
    <div>
    {/* Navbar */}
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          <img src="logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }} className="me-2" />
          Dashboard
        </a>
        <div className="d-flex">
          <button className="btn btn-warning me-2">Notifications</button>
          <button className="btn btn-outline-light">Logout</button>
        </div>
      </div>
    </nav> */}

    {/* Dashboard Summary */}
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <p>Tickets Summary</p>
      <div className="row g-3">
        <div className="col-md-3">
          <div className="dashboard-card bg-primary">
            <FaBriefcase size="2rem" />
            <h4>Total Tickets</h4>
            <h2>24</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card bg-danger">
            <FaEnvelope size="2rem" />
            <h4>New Tickets</h4>
            <h2>18</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card bg-success">
            <FaUnlock size="2rem" />
            <h4>Open Tickets</h4>
            <h2>23</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card bg-danger">
            <FaLock size="2rem" />
            <h4>Closed Tickets</h4>
            <h2>1</h2>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-3">
          <div className="dashboard-card bg-warning">
            <FaArrowAltCircleLeft size="2rem" />
            <h4>Unanswered Tickets</h4>
            <h2>20</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card bg-primary">
            <FaCheckCircle size="2rem" />
            <h4>Answered Tickets</h4>
            <h2>1</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card bg-success">
            <FaRegThumbsUp size="2rem" />
            <h4>Solved Tickets</h4>
            <h2>3</h2>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card bg-secondary">
            <FaStar size="2rem" />
            <h4>Rated Tickets</h4>
            <h2>0</h2>
          </div>
        </div>
      </div>

      <h4 className="mt-4">Recent Tickets</h4>
      <table className="table table-bordered">
        <thead className="bg-light">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Updated</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.updated}</td>
              <td>
                <button className={`btn btn-${ticket.action === 'Solved' ? 'success' : ticket.action === 'Answered' ? 'primary' : ticket.action === 'Unanswered' ? 'warning' : 'danger'} btn-sm`}>
                  {ticket.action}
                </button>
              </td>
              <td>
                <span className={`badge bg-${ticket.status === 'Opened' ? 'success' : 'danger'}`}>{ticket.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}



