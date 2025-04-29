import React from "react";

const blogData = [
  {
    id: 1,
    image: "/blog.png",
    category: "News and Updates",
    title: "The 2024 Shortcut Hackathon Round Up",
    date: "November 10, 2024",
  },
  {
    id: 2,
    image: "/blog1.png",
    category: "News and Updates",
    title: "Advanced Custom Fields are here for more control..",
    date: "October 19, 2024",
  },
  {
    id: 3,
    image: "/blog2.png",
    category: "Team Dynamics",
    title: "How to Bring Engineers on Board with the Product..",
    date: "September 15, 2024",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#0D172A] text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Check out our works
            </h2>
            <p className="text-lg max-w-xl">
              Weblozy is modern project management without all the management.
              And this is our blog.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-gradient-to-r from-blue-500 to-white text-black font-semibold px-6 py-3 rounded hover:from-blue-600 hover:to-gray-100 transition-all">
              Read more stories
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map(({ id, image, category, title, date }) => (
            <div
              key={id}
              className="bg-white text-black rounded overflow-hidden shadow-lg"
            >
              <div className="w-full h-48 relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-blue-600 font-medium mb-2">{category}</p>
                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
