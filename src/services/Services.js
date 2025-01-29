import axios from 'axios';

const apiBaseURL = 'https://atchatbot.pythonanywhere.com';

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow all origins (development only)
    },
};

// Function to start the chatbot
export const UserConversation = async (chatbotId) => {
    let data = JSON.stringify({
        "user_id": "#Usr123"
      });
      
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:5000/get_user_conversation?user_id=%23Usr123',
       
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
