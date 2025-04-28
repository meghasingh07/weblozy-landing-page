import React from "react";
import { useNavigate } from "react-router-dom";

const buttons = [
  {
    label: "Sign in",
    type: "text",
    href: "/signin",
  },
  {
    label: "Sign up for FREE",
    type: "primary",
    href: "/signup",
  },
];

const actions = [
  {
    label: "Get Started - free forever",
    style: "bg-white text-[#0D172A] hover:bg-gray-200",
    navigateTo: "/signup",
  },
  {
    label: "Sign up with Google",
    style:
      "bg-white text-[#0D172A] border border-gray-300 hover:border-gray-500",
    icon: "./google.jpeg",
    navigateTo: "/signin",
  },
];

export default function LandingSection() {
  const navigate = useNavigate();

  const handleActionClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative overflow-hidden"
      style={{ backgroundImage: "url('/bgcolor.png')" }}
    >
      
      <div className="flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/logoo.png" alt="Shortcut Logo" className="h-10 w-auto" />
        </div>

      
        <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
          {buttons.map((button, idx) => (
            <a
              key={idx}
              href={button.href}
              className="bg-white hover:bg-gray-100 text-[#0D172A] font-semibold py-2 px-4 rounded-lg transition-all transform hover:scale-105 duration-300"
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-10 sm:py-16 mt-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-pulse">
              We bring
            </span>{" "}
            product and
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-pulse">
              engineering together.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-300">
            Weblozy brings planning and development together, keeping your
            ongoing work and Docs completely in sync.{" "}
            <span className="font-semibold text-white">Automatically.</span>
          </p>

        
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className={`${action.style} font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 duration-300`}
                onClick={() => handleActionClick(action.navigateTo)} // Use handleActionClick to navigate
              >
                {action.icon && (
                  <img
                    src={action.icon}
                    alt="Google Icon"
                    className="h-6 w-6"
                  />
                )}
                {action.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-0 w-full max-w-md lg:max-w-xl">
          <img
            src="/bg.webp"
            alt="Illustration"
            className="w-full h-auto scale-120"
          />
        </div>
      </div>
    </div>
  );
}
