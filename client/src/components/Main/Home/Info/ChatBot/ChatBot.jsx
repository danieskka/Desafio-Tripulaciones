import React from "react";

const ChatBot = () => {
  const endpointUrl = "https://mi-servicio-chatgpt-u4ktx3b6jq-ew.a.run.app";

  return (
    <iframe
      src={endpointUrl}
      title="ChatBot"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
};

export default ChatBot;
