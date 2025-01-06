import "react-toastify/dist/ReactToastify.css";
import zxcvbn from "zxcvbn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignupPage = ({ createAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const result = zxcvbn(newPassword);
    setPasswordStrength(result.score);
    setPasswordFeedback(result.feedback.suggestions.join(" "));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (passwordStrength < 3) {
      toast.error("Please use a stronger password.");
      return;
    }

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
      navigate("/login");
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 15.232a6 6 0 01-8.464-8.464m12.728 0a6 6 0 01-8.464 8.464M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5c-7.5 0-9.708 5.797-10.392 7.23a.808.808 0 000 .54C2.292 14.203 4.5 20 12 20c7.5 0 9.708-5.797 10.392-7.23a.808.808 0 000-.54C21.708 9.797 19.5 4.5 12 4.5z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {passwordStrength < 3 && (
              <p className="text-red-500 text-sm">{passwordFeedback}</p>
            )}
            <div className="mt-2">
              <p>Password Strength:</p>
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className={`h-2 rounded ${
                    passwordStrength === 0
                      ? "bg-red-500"
                      : passwordStrength === 1
                      ? "bg-orange-500"
                      : passwordStrength === 2
                      ? "bg-yellow-500"
                      : passwordStrength === 3
                      ? "bg-green-400"
                      : "bg-green-600"
                  }`}
                  style={{ width: `${(passwordStrength / 4) * 100}%` }}
                ></div>
              </div>
            </div>
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
