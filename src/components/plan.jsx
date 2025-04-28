import React, { useState, useEffect } from "react";

const Plan = () => {
  const sections = [
    {
      name: "Roadmaps",
      content: "Define clear goals and milestones for product development.",
    },
    {
      name: "Milestones",
      content: "Visualize your work over time, and adjust things on the fly.",
    },
    {
      name: "Epics + Stories",
      content: "Break down large tasks into manageable pieces for your team.",
    },
  ];

  const [openSections, setOpenSections] = useState([false, false, false]);

  useEffect(() => {
    const timers = sections.map((_, index) =>
      setTimeout(() => {
        setOpenSections((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 1500 * (index + 1))
    );

    const closeTimers = sections.map((_, index) =>
      setTimeout(() => {
        setOpenSections((prev) => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
      }, 1500 * (index + 2))
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      closeTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <section id="plan" className="relative bg-[#0D172A]  overflow-hidden -mt-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">Weblozy has the </span> <br />
            <span className="text-blue-300">features you need</span>
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Connect broad company goals to the individual work that drives those
            goals.
          </p>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpenSections((prev) => {
                      const newState = [...prev];
                      newState[index] = !newState[index];
                      return newState;
                    })
                  }
                  className="flex items-center justify-between w-full text-left font-semibold text-blue-400 text-xl"
                >
                  {section.name}
                  <span
                    className={`text-gray-400 transition-transform ${
                      openSections[index] ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openSections[index]
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {openSections[index] && (
                    <p className="text-gray-400 mt-2 pl-2 border-l-4 border-yellow-400">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 transform transition-all duration-700 ease-in-out hover:scale-105">
          <img
            src="/plan.png"
            alt="Plan Screenshot"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center space-y-10">
        <img
          src="/plan2.png"
          alt="Plan 2"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />

        <img
          src="/rightdown.svg"
          alt="Glowing Line"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Plan;
