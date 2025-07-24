
import React from 'react';
import bannerImage from '../assets/1972881.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Keep existing banner as is */}
      <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
        <img 
          src={bannerImage} 
          alt="Feasteria Banner" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 🎉 Grand Welcome Section */}
      <section className="bg-gradient-to-b from-white to-orange-50 px-6 py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4 leading-tight drop-shadow-md">
          Welcome to <span className="text-gray-900">Feasteria 🍽️</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Where flavors meet feelings, and every recipe is a celebration of culture, care, and creativity.
        </p>
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto italic">
          "Feasteria isn't just a food app — it's your journey through aromas, emotions, and unforgettable memories, one dish at a time."
        </p>

        <div className="mt-10">
          <a
            href="#explore"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Explore Recipes 🍲
          </a>
        </div>
      </section>
    </div>
  );
}

