
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left section with image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-orange-100">
        <img
          src="https://cdn.tasteatlas.com/images/toplistarticles/bba22b1a5d424d6a87e6397f7a9598ff.jpg"
          alt="Delicious Food"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right section with form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">Welcome Back</h1>
        <p className="text-gray-600 mb-8 text-center">
          Sign in to explore delicious recipes and foodie features!
        </p>

        <form className="w-full max-w-md space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500"
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
