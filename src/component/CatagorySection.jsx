import React from "react";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const CatagorySection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];
  return (
    <>
      <section>
        <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center">
          <Utensils className="w-6 h-6 mr-3 text-blue-600" />
          Quick Filter by Primary Ingredient
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 px-2">
          {featuredCategories.map((cat, index) => (
            <Link
              to={`search/${cat}`}
              key={index}
              onClick={() => filterByCategory(cat)}
              className="bg-gray-800 p-4 rounded-xl shadow-md text-center 
                 font-medium text-gray-100 border border-gray-700 
                 hover:border-blue-500 hover:text-blue-400 
                 transition-all duration-300 
                 hover:scale-[1.03] hover:bg-gray-700/50 
                 break-words text-sm sm:text-base"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CatagorySection;
