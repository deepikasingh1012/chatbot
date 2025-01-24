import axios from 'axios';

// Define the base URL for your backend
const BASE_URL = "http://localhost:5000";

// Function to start the chatbot
export const startChatbot = async (chatbotId) => {
  try {
    const response = await axios.post(`${BASE_URL}/start`, {
      user_id: chatbotId
    });
    return response.data;
  } catch (error) {
    console.error('Error starting chatbot:', error);
    throw error;
  }
};

// Function to send a message
export const sendMessage = async (message, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/message`, {
      message: message,
      user_id: userId
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Function to send user details
export const sendUserDetails = async (sendUserDetails, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/message`, {
      message: `${sendUserDetails.name}, ${sendUserDetails.number}, ${sendUserDetails.email}`,
      user_id: userId
    });
    return response.data;
  } catch (error) {
    console.error('Error sending user details: ', error);
    throw error;
  }
};

// Function to send review and satisfaction level
export const sendReviewAndSatisfaction = async (review, satisfactionLevel, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/message`, {
      message: `${review}, ${satisfactionLevel}`,
      user_id: userId
    });
    return response.data;
  } catch (error) {
    console.error('Error sending review and satisfaction level: ', error);
    throw error;
  }
};

// Function to terminate the conversation
export const terminateConversation = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/terminate`, {
      user_id: userId
    });
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};

// Function to handle terminate response
export const sendTerminateResponse = async (userId, response) => {
  try {
    const data = await axios.post(`${BASE_URL}/terminate_response`, {
      user_id: userId,
      response: response
    });
    console.log('API response for termination response: ', data);
    return data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};

// Function to handle Submit Query

export const submitQuery = async (userID, userQuery) => {
  try {
    const response = await axios.post(`${BASE_URL}/submit_query`, {
      user_id: userID,
      user_query: userQuery,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting query:', error);
    throw error;
  }
};

