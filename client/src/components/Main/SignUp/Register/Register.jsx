import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegisterSucc from "../../../../../public/assets/PICTURE 10.jpg"

const Register = ({ handleSignup }) => {

  const { register, handleSubmit } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [isRegister, setIsRegister] = useState(false);
  
  const totalPages = 2;

  const onSubmit = async (data) => {
    try {
      // Si estamos en la última página, enviamos los datos al backend
      if (currentPage === totalPages) {
        await handleSignup(data);
        setIsRegister(true);
      } else {
        // Si no estamos en la última página, avanzamos a la siguiente página
        setCurrentPage(currentPage + 1);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
    <section className="backgroundRegister">
          <h1 className="h1-form">Registro</h1>
          {isRegister ? (
            <section className="login-container">
              <article className="login-success">
                <p>¡Enhorabuena, el registro se ha realizado con éxito!</p>
                <img
                  src={RegisterSucc}
                  alt="Mensaje de registro exitoso"
                />
                <Link to="/home" className="home-link">Ir al inicio</Link>
              </article>
            </section>
          ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form ">
            {currentPage === 1 && (
              <>
                <h2>Datos de usuario:</h2>
                <input placeholder="Nombre y Apellidos" type="text"  {...register("username", { required: true })} />

                <label>Fecha de Nacimiento</label>
                <input placeholder="Fecha de Nacimiento" type="date" {...register("birth_date", { required: true })} />


                <select {...register("gender", { required: true })}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="not-specified">Not Specified</option>
                </select>


                <input placeholder="Código Postal" type="text" {...register("zip_code")} />


                <select  {...register("number_of_children")}>
                  <option value="#children">Número de hijos</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">+10</option>
                </select>
              </>
            )}

            {currentPage === 2 && (
              <>
                
                <input type="email" {...register("email", { required: true })} placeholder="Correo electrónico"/>

                
                <input type="password" {...register("password", { required: true })} placeholder="Contraseña"/>

                
                <input type="password" {...register("confirm_password", { required: true })} placeholder="Repetir contraseña"/>

                <label>
                <input
                    type="checkbox"
                    {...register("acceptTerms", { required: true })}
                  />
                    Acepto los{" "}
                    <Link to="/terminos-y-condiciones" target="_blank">
                      términos de uso y políticas de privacidad.
                    </Link>
                </label>
              </>

            )}

            <button type="submit">
              {currentPage === totalPages ? "Finalizar" : "Continuar"}
            </button>
          </form>
          )}
    </section>
    </>
  );
};

export default Register;