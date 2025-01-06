import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = ({ Login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitForm=async (e)=>{
    e.preventDefault()
    const loginaccount = {
      username,
      password,
    };
    Login(loginaccount)
  }
  return (
    <section className="bg-blue-50">
      <div className=" m-auto py-24 max-w-lg">
        <form className="bg-white p-20 shadow-lg rounded-md" onClick={submitForm}>
          <h2 className="text-center font-bold text-3xl mb-3">Login</h2>
          <label htmlFor="username" className="font-bold">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full border rounded mb-5 px-10 py-2"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password" className="font-bold">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border rounded  px-10 mb-5 py-2"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-xl w-full focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
