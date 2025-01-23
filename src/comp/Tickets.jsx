import React, { useState, useEffect } from "react";
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
      name: "NewTicket",
      url: "/NewTicket",
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

  const [ticketData, setTicketData] = useState({});
  const [ticket, setTicket] = useState({ id: null, title: null }); // Store both id and title
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [ratedTicketCount, setRatedTicketCount] = useState(0);
  // const [totalTicketCount, setTotalTicketCount] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true at the start

      try {
        // Fetch ticket count
        const countResponse = await axios.get(
          "http://127.0.0.1:5000/ticket_count"
        );
        setTicketData(countResponse.data);

        // Send POST request to set ticket title
        const response = await axios.post(
          "http://127.0.0.1:5000/set_ticket_title",
          {
            ticket_id: "#Usr226",
          }
        );

        // Log the response to see the structure
        console.log(response.data);

        // Assuming the response contains both ticket_id and ticket_title
        if (
          response.data &&
          response.data.ticket_id &&
          response.data.ticket_title
        ) {
          setTicket({
            id: response.data.ticket_id,
            title: response.data.ticket_title,
          });
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
            // <div key={link.TotalTicket} className="col-12 col-md-3 text-center">
            //   <Link to={link.url} className="text-decoration-none">
            //     <div
            //       className={`dashboard-card ${link.bgColor} text-white p-4 rounded shadow`}
            //     >
            //       <Icon size="2rem" />
            //       <h5>{link.name}</h5>
            //       <p>{ticketData.ticket_count}</p>
            //     </div>
            //   </Link>
            // </div>
            <div key={link.name} className="col-12 col-md-3 text-center">
            <Link to={link.url} className="text-decoration-none">
              <div className={`dashboard-card ${link.bgColor} text-white p-4 rounded shadow`}>
                <Icon size="2rem" />
                <h5>{link.name}</h5>
                {/* Render the updated Total Ticket Count here */}
                {link.name === "TotalTicket" ? (
                  <p>{ticketData.ticket_count}</p> // Display the updated total ticket count
                ) : (
                  <p>{ticketData[link.name.toLowerCase()]}</p> // Display data for other sections
                )}
              </div>
            </Link>
          </div>
          );
        })}
        {/* Tickets Table Section */}
        <div className="bg-white p-4 rounded shadow">
          <h4 className="mb-4">Recent Tickets</h4>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Ticket Title</th>
              </tr>
            </thead>
            <tbody>
              {ticket.id && ticket.title ? (
                <tr>
                  {/* <td>{ticket.id}</td> Displaying the fetched ticket ID */}
                  <Link
                    to={`/get_user_conversation/${ticket.id}`}
                    className="text-decoration-none text-primary"
                  >
                    {ticket.id}
                  </Link>
                  <td>{ticket.title}</td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="2">No Tickets available.</td>
                </tr>
              )}
            </tbody>
           
            
          </table>
        </div>
      </div>
    </div>
  );
}
