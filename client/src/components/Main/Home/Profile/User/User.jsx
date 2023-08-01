import React from "react";
import axios from 'axios';
import Img28 from "../../../../../../public/assets/Frame 28.svg";
import LogOut from "../../../../../../public/assets/LogOutButton.svg";

const User = () => {

  const handleLogOut = async () => {
    try {
      await axios.post('/logout');
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };

  return (
    <>
    <h1>Ajustes</h1>
    <section className="container">
      <article className="article-container">
        <img src={Img28} className="img28"></img>
      </article>
      <article className="article-container">
        <img src={LogOut} className="logoutimg" onClick={handleLogOut}></img>
      </article>
    </section>
    </>
  )
};

export default User;
