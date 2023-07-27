import React from "react";
import axios from "axios"

const LogOut = () => {
  
  const handleLogOut = async () => {
    try {
      await axios.post('/logout');
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };
  return (
    <>
      <button onClick={handleLogOut}>
          Log Out
      </button>
    </>
  )
};

export default LogOut;
