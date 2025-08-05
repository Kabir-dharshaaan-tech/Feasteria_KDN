


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Optional: Save token/user info to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Navigate to profile
        navigate("/profile");
      } else {
        setErrorMsg(data.message || "Login failed");
      }
    } catch (err) {
      setErrorMsg("Server error. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left section */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-orange-100">
        <img
          src="https://cdn.tasteatlas.com/images/toplistarticles/bba22b1a5d424d6a87e6397f7a9598ff.jpg"
          alt="Delicious Food"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">Welcome Back</h1>
        <p className="text-gray-600 mb-8 text-center">
          Sign in to explore delicious recipes and foodie features!
        </p>

        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
          {errorMsg && (
            <p className="text-red-500 text-sm text-center">{errorMsg}</p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300"
          >
            Sign In
          </button>

          <p className="text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
