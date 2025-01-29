import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { UserConversation } from './services'; 

import {
  FaBriefcase,
  FaEnvelope,
  FaArrowAltCircleLeft,
  FaCheckCircle,
  FaRegThumbsUp,
  FaStar,
} from "react-icons/fa";

export default function Tickets() {
  const links = [
    { name: "TotalTicket", url: "/TotalTicket", icon: FaBriefcase, bgColor: "bg-primary" },
    { name: "OpenedTicket", url: "/OpenedTicket", icon: FaEnvelope, bgColor: "bg-success" },
    { name: "UnAnsweredTicket", url: "/UnAnsweredTicket", icon: FaArrowAltCircleLeft, bgColor: "bg-warning" },
    { name: "AnsweredTicket", url: "/AnsweredTicket", icon: FaRegThumbsUp, bgColor: "bg-success" },
    
    { name: "ClosedTicket", url: "/ClosedTicket", icon: FaCheckCircle, bgColor: "bg-danger" },
    { name: "RatedTicket", url: "/RatedTicket", icon: FaStar, bgColor: "bg-info" },
  ];

  // Default ticket data with all counts initialized to 0
  const [ticketData, setTicketData] = useState({
    ticket_count: 0,
    OpenedTicket: 0,
    AnsweredTicket: 0,
    UnAnsweredTicket: 0,
    ClosedTicket: 0,
    RatedTicket: 0,
  });

  const [tickets, setTickets] = useState([]); // Store an array of tickets
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPos.current = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current && scrollContainerRef.current) {
      const deltaY = startPos.current - e.clientY;
      scrollContainerRef.current.scrollTop += deltaY;
      startPos.current = e.clientY;
    }
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Fetch all ticket information
        const ticketResponse = await axios.get("http://127.0.0.1:5000/getAllTicketsInfo");

        console.log("Ticket Response:", ticketResponse.data);  // Debug log: inspect the response

        if (ticketResponse.data && Array.isArray(ticketResponse.data)) {
          const ticketsArray = ticketResponse.data;
          setTickets(ticketsArray);

          // Calculate ticket counts dynamically
          const totalTicketCount = ticketsArray.length;
          const openedTicketCount = ticketsArray.filter((ticket) => ticket.status === "Opened").length;
          const answeredTicketCount = ticketsArray.filter((ticket) => ticket.action === "Answered").length;
          const unansweredTicketCount = ticketsArray.filter((ticket) => ticket.action === "UnAnswered").length;
          const closedTicketCount = ticketsArray.filter((ticket) => ticket.status === "Closed").length;

          // Set the ticket data
          setTicketData({
            ticket_count: totalTicketCount,
            OpenedTicket: openedTicketCount,
            AnsweredTicket: answeredTicketCount,
            UnAnsweredTicket: unansweredTicketCount,
            ClosedTicket: closedTicketCount,
            RatedTicket: 0,  // Assuming no rated tickets in your example. You can update if you have this data
          });

        } else {
          setError("Ticket data is missing or not in the expected format.");
        }

        // Fetch ticket count separately (if needed)
        const ticketCountResponse = await axios.get('http://127.0.0.1:5000/ticket_count'); // Assuming this is your ticket count endpoint
        console.log('Ticket count from separate URL:', ticketCountResponse.data);

        // Update the ticket count in the state from the separate URL (if needed)
        setTicketData((prevState) => ({
          ...prevState,
          ticket_count: ticketCountResponse.data.ticket_count || 0, // Ensure it's a number
        }));

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("Current Ticket Data:", ticketData); // Debug log to ensure state is updated

  return (
    <div className="container mt-5">
      {/* Tickets Summary Section */}
      <div className="row g-4 mb-4">
        
        {links.map((link) => {
          const Icon = link.icon;
          const ticketCount = link.name === "TotalTicket"
            ? ticketData.ticket_count
            : ticketData[link.name] || 0;

          return (
            <div key={link.name} className="col-12 col-md-3 text-center">
              <Link to={link.url} className="text-decoration-none">
                <div className={`dashboard-card ${link.bgColor} text-white p-4 rounded shadow`}>
                  <Icon size="2rem" />
                  <h5>{link.name}</h5>
                  <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {ticketCount}  {/* Render the number correctly */}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
         {/* Recent Tickets Section */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h4 className="mb-4">Recent Tickets</h4>
        <div
          ref={scrollContainerRef}
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            cursor: isDragging.current ? "grabbing" : "grab",
            transition: "all 0.3s ease-in-out",
            borderRadius: "8px",
            padding: "10px",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          <table className="table table-bordered table-striped">
            <thead className="bg-light">
              <tr>
                <th>Ticket ID</th>
                <th>Title</th>
                <th>Updated</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <tr key={ticket.ticket_id}>
                    <td>
                      <Link to={`/user_conversation/${ticket.ticket_id}`}  className="text-decoration-none text-primary">
                        {ticket.ticket_id}
                      </Link>
                    </td>
                    <td>{ticket.ticket_title}</td>
                    <td>{new Date(ticket.updated).toLocaleString()}</td>
                    <td>
                      <button
                        className={`btn btn-${
                          ticket.action === "Closed"
                            ? "success"
                            : ticket.action === "Answered"
                            ? "primary"
                            : ticket.action === "UnAnswered"
                            ? "warning"
                            : "danger"
                        } btn-sm`}
                      >
                        {ticket.action}
                      </button>
                    </td>
                    <td>
                      <span
                        className={`badge bg-${ticket.status === "Opened" ? "success" : "danger"}`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Tickets available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>

     
    </div>
  );
}
