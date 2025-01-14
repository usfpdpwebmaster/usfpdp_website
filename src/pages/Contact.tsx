import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 text-gray-800">
          Contact Us
        </h1>
        {/* Line underneath title */}
        <div className="w-full h-1 bg-red-500 mx-auto mb-8"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-xl lg:text-2xl text-gray-700 space-y-8 bg-white p-12 rounded-2xl shadow-2xl font-roboto">
          <p className="leading-relaxed text-center font-roboto">
            Follow us on <a href="https://www.instagram.com/usfpdpsi/" className="text-red-500 hover:underline">Instagram</a> to stay updated with our latest events and activities!
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://www.instagram.com/usfpdpsi/embed"
              width="800"
              height="800"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
