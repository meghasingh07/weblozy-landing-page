import React from "react";

const DevelopIdeas = () => {
  return (
    <section id="ideate" className="bg-[#0D172A] py-16 px-4 md:px-12">
   <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-white inline-block bg-clip-text text-transparent">
          Develop Your Ideas
        </h2>
        <p className="mt-7 text-gray-300 text-lg">
          All work comes from an idea. Use Shortcut Docs to collaborate on your
          PRDs, design specs, and MVPs.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#121C35] rounded-2xl overflow-hidden shadow-lg flex flex-col">
          <img
            src="/doc.webp"
            alt="Collaborate Doc"
            className="w-full object-cover"
          />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Collaborate in a Doc
              </h3>
              <p className="text-gray-400">
                Real time editing and collaboration with unlimited people that
                automatically updates everywhere. One source of truth with
                multiple views.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-block text-blue-400 underline hover:text-blue-300"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="bg-[#121C35] rounded-2xl overflow-hidden shadow-lg flex flex-col">
          <img
            src="/work.webp"
            alt="Turn Ideas into Work"
            className="w-full object-cover"
          />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Turn Ideas Into Work
              </h3>
              <p className="text-gray-400">
                Create Stories directly from a Doc, or link a new Doc to
                existing work. Stay in sync, automagically.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-block text-blue-400 underline hover:text-blue-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-16 flex flex-col items-center space-y-6">
 
  <img
    src="/video.png"
    alt="Video"
    className="max-w-full h-auto rounded-lg shadow-lg"
  />

  
  <img
    src="/leftdown.svg"
    alt="Arrow"
    className="max-w-full h-auto"
  />
</div>


    </section>
  );
};

export default DevelopIdeas;
