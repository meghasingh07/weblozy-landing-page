import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = [
  "https://cdn.prod.website-files.com/63b84f92c44b24fd0eb5fb66/63b84f92c44b2461f0b5fd07_homepage_video-transcode.mp4",
  "https://cdn.prod.website-files.com/63b84f92c44b24fd0eb5fb66/63b84f92c44b2461f0b5fd07_homepage_video-transcode.mp4",
  "https://cdn.prod.website-files.com/63b84f92c44b24fd0eb5fb66/63b84f92c44b2461f0b5fd07_homepage_video-transcode.mp4",
];

function VideoSlider() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {videos.map((videoUrl, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#0D172A] px-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#A3D7FF] mb-6 text-center leading-snug">
                Visualize, plan, and make progress
              </h2>

              <video
                src={videoUrl}
                className="w-full h-auto max-w-[1200px] max-h-[600px] object-cover rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              />

              <div className="absolute top-0 left-0 w-full ">
                <div className="swiper-pagination"></div>
              </div>

              <div className="w-6xl mt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-180"></div>
              </div>

              <div className="absolute top-0 left-0 w-full h-full sparkle-background"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VideoSlider;
