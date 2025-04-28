import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const fields = [
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter your password",
  },
];

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen  text-white flex justify-center items-center"
    style={{ backgroundImage: "url('/bgcolor.png')" }}>
      <div className="w-full max-w-md p-8 bg-[#1F2937] rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSubmit}>
          {fields.map(({ label, type, id, placeholder }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-sm font-semibold mb-2">
                {label}
              </label>
              <input
                type={type}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
                placeholder={placeholder}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-black py-3 rounded-lg font-semibold transition-all transform hover:scale-105 duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
