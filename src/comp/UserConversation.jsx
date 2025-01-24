import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function UserConversation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user_conversation, setUser_Conversation] = useState(null);

  // Get the current URL and extract the query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const user_id = queryParams.get("user_id");  

  useEffect(() => {
    if (!user_id) {
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .get(`http://127.0.0.1:5000/get_user_conversation?user_id=%23Usr226`)
      .then((response) => {
        setUser_Conversation(response.data);  
        setLoading(false);
      })
      .catch((err) => {
        setError(err);  // Handle errors
        setLoading(false);
      });
  }, [user_id]); 

  // Conditional rendering based on loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        
      <h1>User Conversation: {user_id}</h1>
      <div>
      {user_conversation && <p>{user_conversation.user_id}</p>}
        {/* {user_conversation ? (
          <p>{user_conversation.user_id}</p>
        ) : (
          <p>No conversation found.</p>
        )} */}
      </div>
    </div>
  );
}
