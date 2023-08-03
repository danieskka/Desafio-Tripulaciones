import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

import RegisterSucc from "../../../../public/assets/PICTURE 10.jpg";
import HeatyLogo from "../../../../public/assets/HeatyLogo.png";
import ForgotPassword from "../../../../public/assets/Olvidé mi contraseña.svg";
import RemindMe from "../../../../public/assets/Recuérdame.svg";
import Register from "../../../../public/assets/Frame 33.svg";
import Admin from "../../../../public/assets/Ingresar como administrador.svg";

const Welcome = () => {

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
              
              <input type="email" {...register("email", { required: true })} placeholder="Correo electrónico" />
              <input type="password" {...register("password", { required: true })} placeholder="Contraseña"/>

              <button type="submit" className="home-link">Iniciar Sesión</button>
            </article>
          </form>

          <article className="first-article">
            <img src={ForgotPassword}></img>
            <img src={RemindMe}></img>
          </article>
            
          <article className="other-article">
            <Link to="/register">
              <img src={Register}></img>
            </Link>
          </article>
            
          <article className="last-article">
            <Link to="/adminlogin">
              <img src={Admin}></img>
            </Link>
          </article>
        </section>
      )}
    </>
  );
};

export default Welcome;