import React from "react";
import { useState } from "react";
import axios from "axios";
import Register from "./Register";

const RegisterButton = ({ icon, provider }) => {
  
  return (
    <button className="register-button" disabled>
      <img src={icon} alt={provider} className="icon-img" /> Register with{" "}
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
            <img src="https://www.webconsultas.com/sites/default/files/styles/rrss_wide/public/media/2019/06/25/ola_de_calor_p.jpg" alt="Ola de Calor" className="signup-image"/>

            <RegisterButton icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" provider="Google" />
            <RegisterButton icon="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" provider="Facebook" />
            <RegisterButton icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" provider="Apple" />

            <button onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      ) : (
        <Register handleSignup={handleSignup} />
      )}
    </>
  );
};

export default SignUp;

