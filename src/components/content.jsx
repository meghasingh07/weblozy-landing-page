import React from "react";
import DevelopIdeas from "./ideate";
import Plan from "./plan";
import BuildAnything from "./Build";
import ShipIt from "./ship";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#0D172A] text-white relative overflow-y-auto">
      <div className="sticky top-0 z-50 flex justify-center bg-[#0D172A] py-4">
        <div className="flex flex-wrap items-center bg-[#0D172A] border border-gray-700 rounded-full p-2 shadow-lg space-x-8">
          {["Ideate", "Plan", "Build", "Ship"].map((item, index, array) => (
            <React.Fragment key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-white font-semibold hover:text-blue-400 cursor-pointer"
              >
                {item}
              </a>
              {index < array.length - 1 && (
                <span className="text-white">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 z-40 ">
        <img src="/down.svg" alt="Scroll Down Arrow" className="w-full h-30" />
      </div>

      <section id="ideate" className="pt-[80px] min-h-[100vh]">
        <DevelopIdeas />
      </section>

      <section id="plan" className="min-h-[100vh] pt-[80px] pb-20">
        <Plan />
      </section>

      <section id="build" className="min-h-[100vh] pt-[80px] pb-20">
        <BuildAnything />
      </section>

      <section id="ship" className="min-h-[100vh] pt-[80px] pb-20">
        <ShipIt />
      </section>
    </div>
  );
}
