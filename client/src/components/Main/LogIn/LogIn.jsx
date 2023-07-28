import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

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
            <img src="https://static.thenounproject.com/png/111461-200.png" alt="Mensaje de inicio de sesión" />
            <Link to="/home" className="home-link">Ir a Home</Link>
          </article>
        </section>
      ) : (
      <form onSubmit={handleSubmit(handleLogin)}  className="login-form">
        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />

        <button type="submit">Log in</button>
      </form>
      )}
    </>
  );
};

export default LogIn;