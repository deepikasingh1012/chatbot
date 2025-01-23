import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function GetUserConversation() {
 
  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userConversation, setUserConversation] = useState(null);

  // Get the current URL and extract the query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const user_id = queryParams.get("user_id");  // Extract user_id from the query

  useEffect(() => {
    if (!user_id) {
      setError("User ID is missing in the URL.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        // Make the API request with the user_id
        const response = await axios.get(
          `http://127.0.0.1:5000/get_user_conversation?user_id=${user_id}`
        );

        // Log the response to check the structure
        console.log("API Response:", response.data);

        setUserConversation(response.data);  // Set user conversation state
        setTicketData(response.data);         // Set ticket data state
        setLoading(false);
      } catch (err) {
        setError(err);  // Handle errors
        setLoading(false);
      }
    };

    fetchData();
  }, [user_id]);

  // Conditional rendering based on loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User Conversation for User ID: {user_id}</h1>
      <div>
        {/* If userConversation contains messages, render them */}
        {userConversation && Array.isArray(userConversation) && userConversation.length > 0 ? (
          userConversation.map((message, index) => (
            <div key={index} style={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <strong>{message.sender}:</strong> <p>{message.text}</p>
            </div>
          ))
        ) : (
          <p>No conversation found.</p>
        )}
      </div>
    </div>
  );
}

