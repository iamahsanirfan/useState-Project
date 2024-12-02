"use client"
import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0); // Initialize state with 0

  // Function to increment the count
  const increase = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-md text-center">
        {/* Display the count */}
        <h1 className="text-4xl font-bold mb-6">{count}</h1>

        {/* Increment and Decrement buttons */}
        <div className="mb-4">
          <button
            onClick={increase} // Use the increase function
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Increment
          </button>
          <button
            onClick={decrease} // Use the decrease function
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
