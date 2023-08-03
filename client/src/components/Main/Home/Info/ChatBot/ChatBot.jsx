import React from "react";
import Maria from '../../../../../../public/assets/MAR IA.svg';
import Chat from '../../../../../../public/assets/Frame 24.svg';
import Arrow from '../../../../../../public/assets/Size=32.svg';
import { Link } from "react-router-dom";


const ChatBot = () => {

  const endpointUrl = import.meta.env.VITE_URL_CHAT;

  return (
    <>
    <Link to="/info"><section className="leftarrow"></section></Link>
    <h1>Profesora Virtual</h1>
    <article className="chat-container">
      <img src={Maria} className="chat-img"></img>
      <img src={Chat} className="chat-img"></img>
    </article>
    {/* <img src={Arrow} className="arrow-chat-img"></img> */}
    <iframe
      src={endpointUrl}
      title="ChatBot"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
    </>
  );
};

export default ChatBot;