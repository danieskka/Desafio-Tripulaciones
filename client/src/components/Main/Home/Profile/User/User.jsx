import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Img28 from "../../../../../../public/assets/Frame 28.svg";
import LogOut from "../../../../../../public/assets/LogOutButton.svg";
import LogoutImg from '../../../../../../public/assets/logout.jpg';

const User = () => {

  const [ isLogOut, setIsLogOut ] = useState(false);

  const handleLogOut = async () => {
    try {
      await axios.post('/logout');
      setIsLogOut(true);
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };

  return (
    <>
    {isLogOut? (
      <section className="login-container">
      <h1>Has cerrado sesión correctamente</h1>
          <article className="login-success">
            <img
              src={LogoutImg}
              alt="Mensaje de cerrar sesión"
            />
            <Link to="/" className="home-link">Ir al inicio</Link>
          </article>
        </section>
      ) : (
    <section className="container">
      <h1>Ajustes</h1>
      <article className="article-container">
        <img src={Img28} className="img28"></img>
      </article>
      <article className="article-container">
        <img src={LogOut} className="logoutimg" onClick={handleLogOut}></img>
      </article>
    </section>
    )}
    </>
  )
};

export default User;
