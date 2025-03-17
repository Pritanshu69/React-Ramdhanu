import React from 'react';

const Catalogue = () => {
  return (
    <section id="catalogue" className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
        Download Our Catalogue
      </h2>
      <p className="text-gray-600 mb-8">
        Explore all our services and packages in one place. Click below to download our latest catalogue.
      </p>

      <a
        href="/catalogue.pdf"
        download
        className="inline-block bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
      >
        📥 Download Catalogue
      </a>
    </section>
  );
};

export default Catalogue;
