import React, { useState } from "react";
import { fetchOpenAIResponse } from "../api";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchOpenAIResponse(prompt);
    setResponse(result);
  };

  return (
    <div>
      <h2>Chat with OpenAI</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          required
        />
        <button type="submit">Send</button>
      </form>
      {response && <p><strong>AI:</strong> {response}</p>}
    </div>
  );
};

export default Chat;
