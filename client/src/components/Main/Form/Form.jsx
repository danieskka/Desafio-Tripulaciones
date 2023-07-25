import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = () => {

  const { register, handleSubmit } = useForm();

  const handleSignup = async (data) => {
    try {
      await axios.post("/signup", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // const handleLogin = async (data) => {
  //   try {
  //     await axios.post("/login", data);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  // const handleLogOut = async () => {
  //   try {
  //     await axios.post('/logout');
  //   } catch (error) {
  //     console.log('Error during logout:', error);
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit(handleSignup)} className="sign-up-form">
        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />

        <label>Age:</label>
        <input type="number" {...register("age", { required: true })} />

        <label>Location:</label>
        <input type="text" {...register("location", { required: true })} />

        <button type="submit">Sign up</button>
      </form>

      {/* <form onSubmit={handleSubmit(handleLogin)}  className="sign-up-form">
        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />

        <button type="submit">Log in</button>
      </form>

      <button onClick={handleLogOut}>
          Log Out
      </button> */}
    </>
  )
};

export default Form;
