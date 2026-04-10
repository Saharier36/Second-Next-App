"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-red-500 mb-3">
        Something went wrong
      </h2>

      <p className="text-gray-500 mb-6">
        {error?.message || "An unexpected error occurred"}
      </p>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-6 py-2 rounded-xl hover:opacity-80 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;