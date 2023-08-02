import React from "react";
import { useState } from "react";
import axios from "axios";
import Register from "./Register";
import HeatyTitle from "../../../../public/assets/HeatyTitle.png";

const RegisterButton = ({ icon, provider }) => {
  
  return (
    <button className="register-button buttonRegister" disabled>
      <img src={icon} alt={provider} className="icon-img" /> Continuar con{" "}
      {provider}
    </button>
  );
};

const SignUp = () => {

  const [showRegister, setShowRegister] = useState(false);

  const handleSignup = async (data) => {
    try {
      await axios.post("/signup", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <>
      {!showRegister ? (
        <div className="signup-container">
          <div className="centered-content">
            <img src={HeatyTitle} alt="Logo de Heaty" className="signup-image"/>
          </div>
          <div className="centered-content">

            <RegisterButton  icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" provider="Google" />
            <RegisterButton icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" provider="Facebook" />
            <RegisterButton icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" provider="Apple" />

          <div className="centered-content">
            <button className="buttonRegister" onClick={handleRegisterClick}>Continuar con email</button>
          </div>
          </div>
        </div>
      ) : (
        <Register handleSignup={handleSignup} />
      )}
    </>
  );
};

export default SignUp;

