import React from "react";

const ChatBot = () => {

  const endpointUrl = import.meta.env.VITE_URL_CHAT;

  return (
    <>
    <h1>Profesora Virtual</h1>
    <iframe
      src={endpointUrl}
      title="ChatBot"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
    </>
  );
};

export default ChatBot;