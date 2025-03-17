import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About'; 
import Services from './components/Services';
import Gallery from './components/Gallery';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Slider />
      <About /> 
      <Services />
      <Gallery />
      <Catalogue />
      <Contact />
    </div>
  );
};

export default App;
