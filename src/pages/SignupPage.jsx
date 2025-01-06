import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const SignupPage = ({ createAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const newaccount = {
      username,
      password,
      email,
      first_name,
      last_name,
    };

    const result = await createAccount(newaccount);

    if (result.success) {
      toast.success(result.message, {
        autoClose: 6000,
      });
      navigate("/login"); // Redirect to login page after success
    } else {
      toast.error(result.message, {
        autoClose: 6000,
      });
    }
  };

  return (
    <section className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8">
        <form onSubmit={submitForm}>
          <h2 className="text-center font-extrabold text-3xl text-indigo-600 mb-6">
            Sign Up
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="username"
              id="username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default SignupPage;
