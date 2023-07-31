import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../../public/assets/PICTURE 1.png";
import HeatyImg from "../../../../public/assets/HeatyTitle.png";

const Welcome = () => {
  return (
    <>
      <h1 className="welcome-title"><img src={HeatyImg} alt="Heaty Img" className="title-img"/></h1>
        <section className="login-container">
          <article className="image-container">
            <img
              src={Image1}
              alt="Logo de Heaty"
            />
          </article>
          <article className="login-success">
            <Link to="/register">
              <button className="home-link">Registrarse</button>
            </Link>
            <Link to="/signin">
            <button className="home-link">Iniciar Sesión</button>
            </Link>
          </article>
        </section>
    </>
  );
};

export default Welcome;