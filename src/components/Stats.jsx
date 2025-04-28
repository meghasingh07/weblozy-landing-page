import React from "react";

const stats = [
  { number: "97%", label: "reported direct time savings", color: "border-t-blue-400" },
  { number: "23k+", label: "daily users working", color: "border-t-green-400" },
  { number: "100+", label: "useful integrations", color: "border-t-red-400" },
  { number: "24/7", label: "community conversations", color: "border-t-green-400" },
  { number: "#1", label: "issue tracker on G2", color: "border-t-red-400" },
  { number: "7", label: "years of pushing the milestones", color: "border-t-blue-400" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0D172A] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Weblozy at a glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-[#0D172A] rounded-xl border ${stat.color} border-t-4 p-8 flex flex-col items-center shadow-lg shadow-blue-900/30`}
            >
              <div className="text-5xl font-extrabold text-blue-300 mb-4">{stat.number}</div>
              <div className="text-gray-400 text-center text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
