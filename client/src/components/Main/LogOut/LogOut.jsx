import React, { useState } from "react";
import axios from "axios"
import { Link } from 'react-router-dom';
import LogoutImg from '../../../assets/logout.jpg';

const LogOut = () => {

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
      <section className="login-container">
        <h1>¿Quieres cerrar sesión?</h1>
        <article className="login-success">
            <img
              src='https://assets-a1.kompasiana.com/statics/files/1419823102155648551.png'
              alt="Mensaje de cerrar sesión"
            />
        </article>
        <article className="login-success">
          <button onClick={handleLogOut} className="home-link">
            Log Out
          </button>
        </article>
      </section>
      )}
    </>
  )
};

export default LogOut;
