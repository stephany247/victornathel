import React, { useState } from "react";
import { Icon } from "@iconify/react";

const videoLinks = [
  "https://www.youtube.com/embed/M5GEPP-CBTM?controls=1",
  "https://www.youtube.com/embed/mJuL3Zszn88?controls=1",
  "https://www.youtube.com/embed/bOoUz0rN_Ec?controls=1",
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videoLinks.length) % videoLinks.length
    );
  };

  const nextVideoIndex = (currentIndex + 1) % videoLinks.length;

  return (
    <div className="grid gap-10 mt-10">
      <h2 className="text-3xl font-bold">See what my students are saying!</h2>
      <div className="relative w-full max-w-3xl">
        <div className="flex gap-4 transition-all duration-500 ease-in-out max-w-2xl">
          {/* First Video */}
          <iframe
            className="rounded-lg aspect-video w-[20rem] sm:h-[20rem] sm:w-[20rem] border-2 border-blue"
            src={videoLinks[currentIndex]}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Second Video */}
          <iframe
            className="rounded-lg aspect-video w-[20rem] sm:h-[20rem] sm:w-[20rem] border-2 border-blue"
            src={videoLinks[nextVideoIndex]}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Left Arrow */}
        <button
          className="absolute -left-6 top-1/2 z-50 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
          onClick={prevSlide}
        >
          <Icon icon="prime:arrow-left" className="size-6" />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute -right-6 top-1/2 z-50 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
          onClick={nextSlide}
        >
          <Icon icon="prime:arrow-right" className="size-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {videoLinks.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue" : "bg-hover-blue"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
