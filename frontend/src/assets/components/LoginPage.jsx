import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({onLoginSuccess}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("⚠️ Please fill out the form before logging in.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
  
      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        setMessage("✅ Login successful! Redirecting to Home...");

        setTimeout(() => {
          if (onLoginSuccess) {
            onLoginSuccess(); // ✅ Close modal & navigate home
          } else {
            console.error("❌ onLoginSuccess is not defined!");
          }
        }, 1500);
      } else {
        setMessage("❌ Invalid credentials. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 flex">
        <div className="hidden md:block w-1/2 bg-green-600 text-white p-8 rounded-l-lg relative">
          <h2 className="relative z-10 text-3xl font-bold">Welcome Back!</h2>
          <p className="relative z-10 mt-2">Log in to access your account</p>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700">Welcome</h2>
          <p className="text-gray-500">Log in to your account to continue</p>

          {message && (
            <p className={`mt-4 font-semibold ${message.includes("⚠️") ? "text-red-500" : "text-green-600"}`}>
              {message}
            </p>
          )}

          <form className="mt-6" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                placeholder="awesome@user.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-600">
              Log In
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Don't have an account? {" "}
            <span
        className="text-green-500 hover:underline cursor-pointer"
        onClick={() => navigate("/signUp")}
      >
        Sign up!
      </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
