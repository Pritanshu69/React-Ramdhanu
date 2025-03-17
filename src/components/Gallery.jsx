import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryData = {
  Wedding: [
    '/gallery/wedding1.jpg',
    '/gallery/wedding2.jpg',
    '/gallery/wedding3.jpg',
  ],
  Puja: [
    '/gallery/puja1.jpg',
    '/gallery/puja2.jpg',
    '/gallery/puja3.jpg',
  ],
  Birthday: [
    '/gallery/birthday1.jpg',
    '/gallery/birthday2.jpg',
    '/gallery/birthday3.jpg',
  ],
  Others: [
    '/gallery/others1.jpg',
    '/gallery/others2.jpg',
    '/gallery/others3.jpg',
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Wedding');

  return (
    <section id="gallery" className="py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-10">
          Our Gallery
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {Object.keys(galleryData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-6 rounded-full border-2 ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white border-pink-600'
                  : 'border-pink-600 text-pink-600 hover:bg-pink-500 hover:text-white transition'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic, Animated Image Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {galleryData[selectedCategory].map((image, index) => (
              <motion.div
                layout
                key={image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${selectedCategory} ${index + 1}`}
                  className="object-cover w-full h-72"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
