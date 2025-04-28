import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    company: "Vanta",
    logo: "/thirty.png",
    message:
      "I have never met a team that loves their task tracker, period. Weblozy is a perfect balance between structure and usability.",
    author: "Matt Spitz",
    role: "Head of Engineering at Vanta",
    photo: "/build5.png",
  },
  {
    company: "OCV",
    logo: "/ocv.png",
    message:
      "Weblozy is intuitive and powerful. It's rare to find a tool that's so deeply customizable yet easy to adopt.",
    author: "Sarah Lee",
    role: "Software Engineer at Vanta",
    photo: "/man3.png",
  },
  {
    company: "Thirty Madison",
    logo: "/thirty.png",
    message:
      "Switching to Weblozy was a game changer. Smooth UI, great features, and it's growing with our team every month.",
    author: "John Smith",
    role: "Product Manager at Thirty Madison",
    photo: "/man2.png",
  },
  {
    company: "Vanta",
    logo: "/ocv.png",
    message:
      "Weblozy is a dream to work with. Our whole team onboarded in days, not weeks. Highly recommend!",
    author: "Jane Doe",
    role: "CTO at Vanta",
    photo: "/man1.png",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const testimonial = testimonials[index];

  return (
    <div className="bg-[#0D172A] text-white py-20 px-6 flex flex-col items-center -mt-10">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Our users love Weblozy
      </h2>
      <p className="text-lg text-gray-400 mb-14 text-center max-w-2xl">
        We love our users because they love us. See what they have to say!
      </p>

      <div className="relative w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="bg-[#161F33] rounded-3xl p-10 w-full flex flex-col md:flex-row items-center shadow-xl shadow-blue-900/30 relative"
          >
           
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.logo}
                  alt="Company logo"
                  className="h-8 opacity-70"
                />
              </div>
              <p className="text-xl italic text-gray-300 mb-6 leading-relaxed">
                "{testimonial.message}"
              </p>
              <p className="font-semibold text-white">
                {testimonial.author},{" "}
                <span className="font-normal text-gray-400">
                  {testimonial.role}
                </span>
              </p>
              <a
                href="#"
                className="text-blue-400 underline mt-2 inline-block text-sm"
              >
                Read full story
              </a>
            </div>

          
            <div className="flex-1 flex justify-center mt-8 md:mt-0">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400 shadow-md">
                <img
                  src={testimonial.photo}
                  alt={testimonial.author}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

           
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={handlePrev}
                className="bg-black/30 p-3 rounded-full border border-gray-600 hover:scale-110 transition"
              >
                <ChevronLeft className="text-black" />
              </button>
              <button
                onClick={handleNext}
                className="bg-black/30 p-3 rounded-full border border-gray-600 hover:scale-110 transition"
              >
                <ChevronRight className="text-black" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
