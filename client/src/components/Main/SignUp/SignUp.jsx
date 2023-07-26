import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {

  const { register, handleSubmit } = useForm();

  const handleSignup = async (data) => {
    try {
      await axios.post("/signup", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSignup)} className="sign-up-form">
        <label>Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />

        <label>Username:</label>
        <input type="text" {...register("username", { required: true })} />

        <label>Birth Date:</label>
        <input type="date" {...register("birth_date", { required: true })} />

        <label>Gender:</label>
        <select {...register("gender", { required: true })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="not-specified">Not Specified</option>
        </select>

        <label>Zip Code:</label>
        <input type="text" {...register("zip_code")} />

        <label>Number of Children:</label>
        <select {...register("number_of_children")}>
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

        <button type="submit">Sign up</button>
      </form>
    </>
  )
};

export default SignUp;
