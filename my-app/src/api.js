import axios from "axios";

const API_URL = "http://localhost:5000/api/openai/generate";

export const fetchOpenAIResponse = async (prompt) => {
  try {
    const response = await axios.post(API_URL, { prompt });
    return response.data.response;
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Error occurred!";
  }
};
