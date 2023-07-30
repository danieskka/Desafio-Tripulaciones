import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import RegisterSucc from "../../../assets/PICTURE 10.jpg"
import HeatyLogo from "../../../assets/IconIcon.png"

const LogIn = () => {
  
  const { register, handleSubmit } = useForm();
  const [ isLogin, setIsLogin] = useState(false);

  const handleLogin = async (data) => {
    try {
      await axios.post("/login", data);
      setIsLogin(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      {isLogin ? ( 
        <section className="login-container">
          <article className="login-success">
            <p>¡Has iniciado sesión con éxito!</p>
            <img src={RegisterSucc} alt="Mensaje de inicio de sesión" />
            <Link to="/home" className="home-link">Ir al inicio</Link>
          </article>
        </section>
      ) : (
        <section className="login-container">
          
          <img src={HeatyLogo} alt="Mensaje de inicio de sesión" className="heaty-logo"/>
          
          <form onSubmit={handleSubmit(handleLogin)}  className="login-form">
            <article className="login-success">
              <label>Correo electrónico:</label>
              <input type="email" {...register("email", { required: true })} />

              <label>Contraseña:</label>
              <input type="password" {...register("password", { required: true })} />

              <button type="submit" className="home-link">Iniciar Sesión</button>
            </article>
          </form>
        </section>
      )}
    </>
  );
};

export default LogIn;