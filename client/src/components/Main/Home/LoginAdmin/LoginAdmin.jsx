import { Link } from "react-router-dom";



const LoginAdmin = () => {
  return (
    <>
        <section className="login-container">
          <h1>Registro Admin</h1>
          <img src='assets/HeatyLogo.png' alt="Mensaje de inicio de sesión" className="heaty-logo"/>
          <form  className="login-form">

            <article className="login-success">
              <label>Correo electrónico:</label>
              <input type="email" />

              <label>Contraseña:</label>
              <input type="password" />

              <Link to='/admin'><button type="submit" className="home-link">Iniciar Sesión</button></Link>
            </article>
          </form>
        </section>
    </>
  );
};

export default LoginAdmin;
