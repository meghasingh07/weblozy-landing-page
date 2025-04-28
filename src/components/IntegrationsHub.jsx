import React from "react";

const logos = [
  "/slack.svg",
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
  "/2.svg",
  "/6.svg",
  "/7.svg",
  "/8.svg",
  "/1.svg",
  "/8.svg",
];

export default function IntegrationsHub() {
  return (
    <section className="bg-[#0D172A] text-white relative py-20 px-6 overflow-hidden">
     
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/lang.svg"
          alt="Glowing Line"
          className="w-full h-60 mx-auto"
        />
      </div>
      

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-20">The hub of Integrations</h2>
        <p className="text-gray-400 mb-6">
          From GitHub to Slack, we offer integrations with tools you love, tools you like, and tools you may even feel kinda meh about. Plus, you can write your own integrations with our API.
        </p>
        <a
          href="#"
          className="font-bold text-white hover:text-blue-400 transition underline decoration-blue-400 underline-offset-4"
        >
          Explore our <span className="text-blue-400">Integrations Library</span> &rarr;
        </a>

       
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-[#0D172A] p-4 rounded-full flex items-center justify-center w-20 h-20 hover:bg-blue-500/10 transition"
            >
              <img src={logo} alt="Integration" className="w-10 h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
