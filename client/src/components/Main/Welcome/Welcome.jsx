import React from "react";
import { Link } from "react-router-dom";
import HeatyLogo from "../../../assets/Group 2Icon.png";
import HeatyImg from "../../../assets/HeatyLogo.png";

const Welcome = () => {
  return (
    <>
      <h1 className="welcome-title"><img src={HeatyImg} alt="Heaty Img" className="title-img"/></h1>
        <section className="welcome-container">
          <article className="image-container">
            <img
              src={HeatyLogo}
              alt="Logo de Heaty"
            />
          </article>
          <article className="buttons-container">
            <Link to="/register" className="welcome-button">
              Registrarse
            </Link>
            <Link to="/signin" className="welcome-button">
              Iniciar Sesión
            </Link>
          </article>
        </section>
    </>
  );
};

export default Welcome;