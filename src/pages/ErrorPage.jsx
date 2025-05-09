import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
      {/* Animated Gear Icon */}
      <div className="animate-spin-slow mb-6">
        <svg
          className="w-20 h-20 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6V3m0 18v-3m6-6h3M3 12h3m12.364-4.364l2.121-2.121M4.515 19.485l2.121-2.121M19.485 19.485l-2.121-2.121M4.515 4.515l2.121 2.121"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Under Construction
      </h1>
      <p className="text-gray-500 mb-6">
        This page is currently being built. Please check back later.
      </p>

      <button
        onClick={() => navigate("/")}
        className="btn bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
