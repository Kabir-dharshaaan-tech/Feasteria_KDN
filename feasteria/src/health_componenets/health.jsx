// import React from 'react';

export default function Health() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          🫀 Healthy Living with Feasteria
        </h1>

        {/* Calories Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">🔥 Understanding Calories</h2>
          <p className="text-gray-700 leading-relaxed">
            Calories are units of energy that our bodies need to function. A balanced intake of calories ensures we have the energy to perform daily activities, maintain body weight, and support overall health.
          </p>
          <ul className="list-disc list-inside mt-3 text-sm text-gray-600">
            <li>Men need ~2500 calories/day</li>
            <li>Women need ~2000 calories/day</li>
            <li>Active individuals may need more</li>
          </ul>
        </section>

        {/* Diet Types Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">🥗 Popular Diet Types</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "🍃 Vegetarian Diet", desc: "Excludes meat, focuses on vegetables, fruits, grains, and legumes." },
              { title: "🐟 Mediterranean Diet", desc: "Rich in olive oil, fish, fruits, and veggies. Supports heart health." },
              { title: "🥩 Keto Diet", desc: "Low carb, high fat. Your body burns fat for fuel." },
              { title: "🌾 Balanced Diet", desc: "Combines all nutrients in the right proportions." },
            ].map((diet, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-md">
                <h3 className="font-semibold text-lg">{diet.title}</h3>
                <p className="text-sm text-gray-600">{diet.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food Categories Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">🍽️ Food Categories</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Fruits", emoji: "🍎" },
              { name: "Vegetables", emoji: "🥦" },
              { name: "Proteins", emoji: "🥚" },
              { name: "Grains", emoji: "🌾" },
              { name: "Dairy", emoji: "🥛" },
              { name: "Fats & Oils", emoji: "🧈" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-3xl">{item.emoji}</div>
                <div className="text-gray-700 font-semibold mt-2">{item.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-red-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-red-600 mb-3">💡 Quick Health Tips</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Drink at least 2-3 liters of water daily</li>
            <li>Eat 5 servings of fruits & vegetables a day</li>
            <li>Limit added sugars and salty snacks</li>
            <li>Move your body for 30 minutes every day</li>
            <li>Get enough sleep and manage stress</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
