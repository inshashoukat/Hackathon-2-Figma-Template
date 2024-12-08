
"use client";

import Image from "next/image";
import { useState } from "react";
import Peace from "@/public/pictures/peace.png"


export default function Inspiration() {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images array
  const images = [
    {
      src: "/images/inspiration.png",
      title: "Inner Peace",
      description: "01 — Bed Room",
    },
    
    {
      src: "/images/Rectangle.png",
      title: "Classic Touch",
      description: "02 — Dining Room",
    },
    {
        src: "/images/image-inspire.png",
        title: "Modern Aesthetic",
        description: "03 — Living Room",
      },
  ];

  // Function to navigate images
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen flex justify-center items-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-lg text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-[#c1975a] text-white px-6 py-3 text-lg font-medium rounded-md hover:bg-[#a37e49] transition">
            Explore More
          </button>
        </div>

        {/* Sub Room Images */}
        <div className="flex items-center justify-between mt-4">
          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-24 h-24 overflow-hidden rounded-md shadow-md cursor-pointer ${
                  currentIndex === index ? "ring-4 ring-[#c1975a]" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={Peace}
                  alt={image.title}
                  width={372}
                  height={486}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}