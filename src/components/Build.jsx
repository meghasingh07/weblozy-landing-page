import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Teams",
    description:
      "Customizable swim lanes provide unlimited workflows to match your way of doing things.",
    image: "/build1.webp",
    color: "bg-yellow-400",
  },
  {
    title: "Spaces",
    description:
      "Sort and view all ongoing work by any parameter. Personalize the view that matters to you.",
    image: "/build2.webp",
    color: "bg-blue-400",
  },
  {
    title: "Sprints",
    description:
      "Use Iterations to manage your week-to-week work in time-boxed Sprints.",
    image: "/build3.webp",
    color: "bg-red-400",
  },
];

export default function BuildAnything() {
  return (
    <section
      id="build"
      className="bg-[#0D172A] text-white py-24 px-6 md:px-16 -mt-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-7 bg-gradient-to-r from-sky-400 via-white to-sky-400 bg-clip-text text-transparent leading-[1.2] py-2">
          Build Anything
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl">
          Manage ongoing work with Kanban boards, spaces, and sprint planning —
          tailored to your workflow.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="bg-[#121e32] p-6 rounded-2xl shadow-lg">
            <img src="/build4.svg" alt="Dataiku" className="h-12 mb-6" />
            <p className="text-gray-400 mb-8">
              Sometimes a roadmap feature just does exactly what it's meant to —
              that's exactly how Weblozy roadmap feature works. It's perfect.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/build5.png"
                alt="Karl Keith"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">Karl Oyeul</p>
                <p className="text-sm text-gray-400">Head of Operations</p>
              </div>
            </div>
            <a
              href="#customer-stories"
              className="text-blue-400 mt-6 inline-block font-semibold hover:underline"
            >
              Read more Customer Stories
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 bg-[#121e32] rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <div
                className={`p-4 rounded-lg ${feature.color} flex items-center justify-center`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-blue-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mt-1">{feature.description}</p>
              </div>
              <div className="text-blue-400 text-3xl">➔</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-10">
            <img src="/down.svg" alt="Glow Line" className="h-80" />
          </div>
    </section>
  );
}
