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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#0D172A]">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={!isMobile ? { clickable: true } : false}
        loop
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        {videos.map((videoUrl, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative flex flex-col justify-between items-center h-full w-full px-4 py-4">

              {/* Heading */}
              <h2 className="text-xl md:text-3xl font-semibold text-[#A3D7FF] text-center leading-snug">
                Visualize, plan, and make progress
              </h2>

              {/* Video */}
              <video
                src={videoUrl}
                className="w-full max-w-[1200px] flex-1 object-cover rounded-lg shadow-lg my-2"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Divider Line (Sparkle) */}
              <div className="w-full">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>

              {/* Pagination (Desktop Only) */}
              {!isMobile && (
                <div className="absolute bottom-4 left-0 w-full flex justify-center">
                  <div className="swiper-pagination"></div>
                </div>
              )}

              {/* Sparkle Background */}
              <div className="absolute top-0 left-0 w-full h-full sparkle-background pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VideoSlider;
