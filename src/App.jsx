import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About'; // ✅ Importing About

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Slider />
      <About /> {/* ✅ Adding About section */}

      {/* Placeholder for other sections */}
      <section id="services" className="min-h-screen p-8 bg-white">
        <h2 className="text-3xl font-bold text-center">Services Section</h2>
      </section>

      <section id="gallery" className="min-h-screen p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">Gallery Section</h2>
      </section>

      <section id="contactus" className="min-h-screen p-8 bg-white">
        <h2 className="text-3xl font-bold text-center">Contact Us Section</h2>
      </section>
    </div>
  );
};

export default App;
