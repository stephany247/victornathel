import React, { useState } from "react";
import test1 from "../assets/test1.webp";
import test2 from "../assets/test2.webp";
import test3 from "../assets/test3.webp";
import test4 from "../assets/test4.webp";
import { Icon } from "@iconify/react";

const Carousel = () => {
  // Array of images
  const images = [test1, test2, test3, test4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle previous and next buttons
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Calculate the index for the second image (to display 2 images)
  const nextImageIndex = (currentIndex + 1) % images.length;

  return (
    <div className="grid gap-10">
      <h2 className="text-xl md:text-3xl font-bold">See what my students are saying!</h2>
      <div className="relative z-0 w-full h-[400px] md:h-[500px] max-w-3xl rounded-lg">
        <div className="flex gap-4 transition-all duration-500 rounded-lg ease-in-out w-full">
          {/* First Image */}
          <img
            className="object-cover w-full md:w-1/2 rounded-lg h-[32rem]"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          {/* Second Image */}
          <img
            className="object-cover w-1/2 rounded-lg h-[32rem] hidden md:block"
            src={images[nextImageIndex]}
            alt={`Slide ${nextImageIndex + 1}`}
          />
        </div>

        {/* Left Arrow (Previous) */}
        <button
          className="absolute -left-6 top-1/2 z-10 transform -translate-y-1/2 text-gray-800 bg-white p-3 rounded-full border shadow-2xl opacity-100 hover:bg-light-blue"
          onClick={prevSlide}
        >
          <Icon icon="prime:arrow-left" className="size-6" />
        </button>

        {/* Right Arrow (Next) */}
        <button
          className="absolute -right-6 top-1/2 z-10 transform -translate-y-1/2 text-gray-800 bg-white p-3 rounded-full border shadow-2xl opacity-100 hover:bg-light-blue"
          onClick={nextSlide}
        >
          <Icon icon="prime:arrow-right" className="size-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute -bottom-40 md:-bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
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

export default Carousel;
