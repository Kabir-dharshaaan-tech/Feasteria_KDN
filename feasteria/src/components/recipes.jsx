


import React from "react";
import { ArrowRight } from "lucide-react";

const recipeSections = {
  "Recent Recipes": [
    {
      id: 1,
      name: "Spicy Ramen",
      description: "A delicious bowl of homemade spicy ramen with eggs and veggies.",
      image: "https://source.unsplash.com/300x200/?ramen"
    },
    {
      id: 2,
      name: "Fresh Pasta",
      description: "Classic Italian pasta with tomato sauce and basil.",
      image: "https://source.unsplash.com/300x200/?pasta"
    }
  ],
  "Top Recipes": [
    {
      id: 3,
      name: "Classic Burger",
      description: "Juicy beef patty with fresh lettuce, tomato, and cheese.",
      image: "https://source.unsplash.com/300x200/?burger"
    },
    {
      id: 4,
      name: "Sushi Platter",
      description: "Assorted sushi with soy sauce and wasabi.",
      image: "https://source.unsplash.com/300x200/?sushi"
    }
  ],
  "Indian Cuisine": [
    {
      id: 5,
      name: "Butter Chicken",
      description: "Rich and creamy chicken in spiced tomato gravy.",
      image: "https://source.unsplash.com/300x200/?butter-chicken"
    },
    {
      id: 6,
      name: "Masala Dosa",
      description: "Crispy dosa filled with flavorful potato masala.",
      image: "https://source.unsplash.com/300x200/?dosa"
    }
  ],
  "World Cuisine": [
    {
      id: 7,
      name: "Tacos",
      description: "Spicy Mexican tacos with meat, salsa, and veggies.",
      image: "https://source.unsplash.com/300x200/?tacos"
    },
    {
      id: 8,
      name: "Pad Thai",
      description: "Thai stir-fried noodles with shrimp, tofu, and peanuts.",
      image: "https://source.unsplash.com/300x200/?pad-thai"
    }
  ]
};

function ERecipes() {
  return (
    <div className="p-6 bg-[#fffaf5] min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-orange-700">Explore Recipes</h2>

      {Object.entries(recipeSections).map(([sectionTitle, recipes]) => (
        <div key={sectionTitle} className="mb-10">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">{sectionTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
           
              <div
  key={recipe.id}
  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden relative pb-14"
>
  <img
    src={recipe.image}
    alt={recipe.name}
    className="w-full h-40 object-cover"
  />
  <div className="p-4">
    <h4 className="text-lg font-semibold text-gray-800">{recipe.name}</h4>
    <p className="text-gray-600 text-sm mt-2 mb-6">{recipe.description}</p>
  </div>

  {/* Bottom left button */}
  <div className="absolute bottom-3 left-4">
    <button className="flex items-center text-orange-600 hover:text-red-600 font-medium text-sm">
      View Recipe <ArrowRight className="ml-1 w-4 h-4" />
    </button>
  </div>
</div>

            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ERecipes;
