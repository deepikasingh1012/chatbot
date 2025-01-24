import React, { useState, useEffect, useRef } from "react"; 
import { Link } from "react-router-dom";
import axios from "axios";
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
    {
      name: "TotalTicket",
      url: "/TotalTicket",
      icon: FaBriefcase,
      bgColor: "bg-primary",
    },
    {
      name: "OpenTicket",
      url: "/OpenTicket",
      icon: FaEnvelope,
      bgColor: "bg-danger",
    },
    {
      name: "AnsweredTicket",
      url: "/AnsweredTicket",
      icon: FaRegThumbsUp,
      bgColor: "bg-success",
    },
    {
      name: "UnAnsweredTicket",
      url: "/UnAnsweredTicket",
      icon: FaArrowAltCircleLeft,
      bgColor: "bg-warning",
    },
    {
      name: "ClosedTicket",
      url: "/ClosedTicket",
      icon: FaCheckCircle,
      bgColor: "bg-secondary",
    },
    {
      name: "RatedTicket",
      url: "/RatedTicket",
      icon: FaStar,
      bgColor: "bg-info",
    },
  ];

  // Default ticket data with all counts initialized to 0
  const [ticketData, setTicketData] = useState({
    ticket_count: 0,
    openTicket: 0,
    answeredTicket: 0,
    unansweredTicket: 0,
    closedTicket: 0,
    ratedTicket: 0,
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
        // Fetch ticket count
        const countResponse = await axios.get("http://127.0.0.1:5000/ticket_count");
        
        // Set default values to 0 if the data is missing
        setTicketData((prevData) => ({
          ...prevData,
          ticket_count: countResponse.data.ticket_count || 0,
          openTicket: countResponse.data.openTicket || 0,
          answeredTicket: countResponse.data.answeredTicket || 0,
          unansweredTicket: countResponse.data.unansweredTicket || 0,
          closedTicket: countResponse.data.closedTicket || 0,
          ratedTicket: countResponse.data.ratedTicket || 0,
        }));

        // Send POST request to set ticket title
        const response = await axios.post("http://127.0.0.1:5000/set_ticket_title", {
          ticket_id: "#Usr226", // Send only one ticket_id
        });

        // Log the response to see the structure
        console.log(response.data);

        // Assuming the response contains both ticket_id and ticket_title
        if (response.data && response.data.ticket_id && response.data.ticket_title) {
          setTickets([
            {
              id: response.data.ticket_id,
              title: response.data.ticket_title,
              updated: new Date().toLocaleString(),
            },
          ]);
        } else {
          setError("Ticket data is missing from the response.");
        }
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

  return (
    <div className="container mt-5">
      {/* Tickets Summary Section */}
      <div className="row g-4 mb-4">
        {links.map((link) => {
          const Icon = link.icon; // Dynamically use the icon
          return (
            <div key={link.name} className="col-12 col-md-3 text-center">
              <Link to={link.url} className="text-decoration-none">
                <div className={`dashboard-card ${link.bgColor} text-white p-4 rounded shadow`}>
                  <Icon size="2rem" />
                  <h5>{link.name}</h5>
                  {/* Render the updated Total Ticket Count here */}
                  {link.name === "TotalTicket" ? (
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                      {ticketData.ticket_count}
                    </p> // Display the updated total ticket count
                  ) : (
                    // Display the other ticket counts, defaulting to 0
                    <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{ticketData[link.name.toLowerCase()] || 0}</p> // Ensure all categories show 0 if not available
                  )}
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
                  <tr key={ticket.id}>
                    <Link
                      to={`/user_conversation`}
                      className="text-decoration-none text-primary"
                    >
                      {ticket.id}
                    </Link>
                    <td>{ticket.title}</td>
                    <td>{ticket.updated}</td>
                    <td>
                      <button
                        className={`btn btn-${
                          ticket.action === "Closed"
                            ? "success"
                            : ticket.action === "Answered"
                            ? "primary"
                            : ticket.action === "Unanswered"
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
