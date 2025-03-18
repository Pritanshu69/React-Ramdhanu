import React from 'react';

const Contact = () => {
  return (
    <section id="contactus" className="py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-10">
          Contact us to make your event memorable! Reach out via WhatsApp, phone, or send us a message.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">📞 Call Us</h3>
            <p className="text-gray-700">+91 9836052374</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <p className="text-gray-700">ramdhanudecoration@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💬 WhatsApp</h3>
            <a
              href="https://wa.me/919836052374"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-medium underline"
            >
              Chat Now
            </a>
          </div>
        </div>

        {/* Message Form */}
        <form
          action="https://formsubmit.co/random.com"
          method="POST"
          className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg p-4 focus:outline-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg p-4 focus:outline-pink-500"
            />
          </div>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-4 mt-6 w-full focus:outline-pink-500"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 bg-pink-500 text-white font-semibold py-3 px-10 rounded-full hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
