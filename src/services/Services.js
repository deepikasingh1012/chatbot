import axios from 'axios';

// Define the base URL for your backend
const BASE_URL = "http://localhost:5000";

// Function to start the chatbot
export const getUserConversation = async (chatbotId) => {
    let data = JSON.stringify({
        "user_id": "#Usr123"
      });
      
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:5000/get_user_conversation?user_id=%23Usr123',
        headers: { 
          'Content-Type': 'application/json', 
         
        },
        data : data
      };
  try {
    const response = await axios.get(`${BASE_URL}/get_user_conversation?user_id=%23Usr123`, {
      user_id: chatbotId
    });
    return response.data;
  } catch (error) {
    console.error('Error starting chatbot:', error);
    throw error;
  }
};
