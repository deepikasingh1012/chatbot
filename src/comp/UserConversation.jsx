
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function UserConversation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userConversation, setUserConversation] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = encodeURIComponent(queryParams.get("user_id") || "");

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setError(new Error("Invalid or missing user ID."));
      return;
    }

    setLoading(true);

    axios
      .get(`http://127.0.0.1:5000/get_user_conversation?user_id=${userId}`)
      .then((response) => {
        setUserConversation(response.data.user_conversation);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div aria-live="polite">Loading...</div>;
  if (error) return <div aria-live="polite">Error: {error?.message || "An unknown error occurred."}</div>;

  const parseConversation = (conversation) => {
    return conversation
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => {
        const sender = line.startsWith("Chatbot") ? "chatbot" : "user";
        const message = line.replace(/^(Chatbot|User): /, "").trim();
        return { sender, message };
      });
  };

  const renderConversation = () => {
    if (!userConversation) {
      return <p>No conversation available for this user.</p>;
    }

    const messages = parseConversation(userConversation);

    return messages.map((msg, index) => (
      <div
        key={index}
        className={`chat-message ${msg.sender}`}
        style={{
          display: "flex",
          justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: msg.sender === "user" ? "#007bff" : "#f1f1f1",
            color: msg.sender === "user" ? "white" : "black",
            borderRadius: "20px",
            padding: "10px 15px",
            maxWidth: "70%",
            wordBreak: "break-word",
          }}
        >
          {msg.message}
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1>User Conversation for ID: {userId}</h1>
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {renderConversation()}
      </div>
    </div>
  );
}
