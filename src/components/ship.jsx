import React from "react";
import { motion } from "framer-motion";

const shipFeatures = [
  {
    title: "Visualize Progress with Reporting",
    description: "Get detailed views of progress and blockers so you can focus resources where they're most needed.",
    image: "/ship1.webp", 
    link: "#",
  },
  {
    title: "Monitor Post-Launch Issues",
    description: "Get detailed views of progress and blockers so you can focus resources where they're most needed.",
    image: "/ship2.webp", 
    link: "#",
  },
];

export default function ShipIt() {
  return (
    <section id="ship" className="bg-[#0D172A] text-white py-24 px-6 md:px-16 -mt-90">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-white to-sky-400 bg-clip-text text-transparent leading-[1.2] py-2">
          Ship It
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl">
          Launch and monitor new features from directly within Weblozy.
        </p>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl">
  <video
    src="/ship.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-auto"
  />
</div>

      </motion.div>

     
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {shipFeatures.map((feature, idx) => (
          <motion.a
            key={idx}
            href={feature.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="block bg-[#121e32] rounded-2xl hover:shadow-2xl transition overflow-hidden"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full object-cover h-64 md:h-80"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <span className="text-blue-400 font-semibold hover:underline">
                Learn more
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
