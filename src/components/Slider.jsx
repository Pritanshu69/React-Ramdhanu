import React, { useState, useEffect } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css";

const slides = [
  { url: 'hero1.jpg', text: 'Elegant Wedding Decorations' },
  { url: 'hero2.jpg', text: 'Creative Birthday Setups' },
  { url: 'hero3.jpg', text: 'Professional Corporate Events' },
  { url: 'hero4.jpg', text: 'Professional Corporate Events' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    Toastify({
      text: "Hey! Welcome to Ramdhanu Decoration",
      duration: 2000,
      gravity: "top", // Display position (top, bottom)
      position: "right", // Left, center, right
      backgroundColor: "#E60076", // Pinkish shade matching your theme
      stopOnFocus: true, // Prevents dismissing when hovered
    }).showToast();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16">
      <div
        className="w-full h-[500px] bg-cover bg-center duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h2 className="text-black text-3xl md:text-5xl font-bold">{slides[currentIndex].text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Slider;
