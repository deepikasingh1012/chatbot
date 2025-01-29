import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CallbackRequestsTable() {
  const [tickets, setTickets] = useState([]); // Store an array of tickets
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);  // Store the success message after update

  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);

  // Handle drag-to-scroll functionality
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
        // Fetch all tickets
        const response = await axios.post("http://127.0.0.1:5000/callback_request_resolution_status");

        if (response.data && Array.isArray(response.data.callback_requests)) {
          setTickets(response.data.callback_requests); // Set ticket data
        } else {
          setError("No callback request data found.");
        }
      } catch (err) {
        setError("Failed to load callback requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle the update of callback request resolution status
  const updateResolutionStatus = async (ticket_id, currentStatus) => {
    try {
      const updatedStatus = !currentStatus; // Toggle the current status
      const response = await axios.get("http://127.0.0.1:5000/callback_request_resolution_status", {
        ticket_id,
        callback_request_resolution_status: updatedStatus
      });

      if (response.data.callback_request_resolution_status === updatedStatus) {
        setMessage(`Callback request resolution status for ${ticket_id} updated successfully!`);
        
        // Update ticket state with the new status
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket.ticket_id === ticket_id
              ? { ...ticket, callback_request_resolution_status: updatedStatus }
              : ticket
          )
        );
      } else {
        setMessage("Error updating the resolution status.");
      }
    } catch (error) {
      setMessage("Failed to update the resolution status.");
    }
  };

  // If loading, show loading message
  if (loading) return <div>Loading...</div>;
  // If error, show error message
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      {message && (
        <div className="alert alert-success">
          {message}
        </div>
      )}

      <div className="bg-white p-4 rounded shadow mb-4">
        <h4 className="mb-4">Callback Requests</h4>
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
                <th>User Name</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <tr key={ticket.ticket_id}>
                    <td>
                      <Link to={`/user_conversation/${ticket.ticket_id}`} className="text-decoration-none text-primary">
                        {ticket.ticket_id}
                      </Link>
                    </td>
                    <td>{ticket.user_name}</td>
                    <td>
                      <span
                        className={`badge bg-${ticket.callback_request_resolution_status ? "success" : "warning"}`}
                      >
                        {ticket.callback_request_resolution_status ? "Resolved" : "Pending"}
                      </span>
                    </td>
                    <td>{new Date(ticket.created_at).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() =>
                          updateResolutionStatus(ticket.ticket_id, ticket.callback_request_resolution_status)
                        }
                      >
                        {ticket.callback_request_resolution_status ? "Mark as Pending" : "Mark as Resolved"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No callback requests available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
