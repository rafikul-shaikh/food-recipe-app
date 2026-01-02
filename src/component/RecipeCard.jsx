import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="w-full ">
      {/* Card Div */}
      <div
        className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/40 border
       border-gray-800 overflow-hidden transition duration-300 
       hover:shadow-blue-600/40 flex flex-col  h-[170px] sm:h-[400px]"
      >
        <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-blue-500/80 transition duration-300 pointer-events-none" />

        {/* Image Container */}
        <div className="flex items-center justify-center h-[100px] sm:h-[300px] px-4 pt-4">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="
              h-full w-full object-cover
              rounded-lg
              border border-yellow-400
              transition duration-300
            "
          />
        </div>

        {/* TITLE */}
        <div className="mt-auto px-2 py-2 text-center">
          <h1 className="text-sm  font-semibold text-gray-100 leading-snug line-clamp-2">
            {meal.strMeal}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
