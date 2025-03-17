import React from 'react';

const services = [
  {
    title: 'Wedding Decoration',
    description: 'Make your special day unforgettable with elegant wedding decorations and creative themes.',
    emoji: '💒', // Wedding emoji
  },
  {
    title: 'Birthday Parties',
    description: 'Add fun, colors, and excitement to birthday parties with unique and playful setups.',
    emoji: '🎉', // Party emoji
  },
  {
    title: 'Corporate Events',
    description: 'Professional and classy decorations for corporate events, seminars, and product launches.',
    emoji: '🏢', // Office/Corporate emoji
  },
  {
    title: 'Anniversary & Special Events',
    description: 'Celebrate anniversaries and other special moments with stylish and custom decorations.',
    emoji: '❤️', // Love/Anniversary emoji
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="text-6xl mb-4">{service.emoji}</div> {/* Emoji icon */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
