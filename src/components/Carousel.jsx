import React, { useState } from "react";
import test1 from "../assets/test1.webp";
import test2 from "../assets/test2.webp";
import test3 from "../assets/test3.webp";
import test4 from "../assets/test4.webp";

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
    <div className="relative w-full h-[400px] md:h-[500px] mt-10 overflow-hidden max-w-3xl rounded-lg">
      <div className="flex gap-4 transition-all duration-500 ease-in-out">
        {/* First Image */}
        <img
          className="object-cover w-1/2 h-full rounded-lg min-h-[32rem]"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
        {/* Second Image */}
        <img
          className="object-cover w-1/2 h-full rounded-lg min-h-[32rem]"
          src={images[nextImageIndex]}
          alt={`Slide ${nextImageIndex + 1}`}
        />
      </div>

      {/* Left Arrow (Previous) */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Right Arrow (Next) */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Optional: Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 ${
              index === currentIndex ? "bg-blue-500" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
