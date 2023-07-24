import './App.css'
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {

  const { register, handleSubmit } = useForm();

  const handleSignup = async (data) => {
    try {
      await axios.post("http://localhost:3000/signup", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
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
  )
}

export default App
