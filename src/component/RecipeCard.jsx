import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block">
      {/* CARD */}
      <div
        className="
          w-full max-w-[260px]
          bg-gray-800
          rounded-xl
          border border-gray-700
          shadow-lg shadow-black/40
          overflow-hidden
          transition duration-300
          hover:shadow-blue-600/40
          flex flex-col
        "
      >
        {/* IMAGE */}
        <div className="aspect-square p-3">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="
              w-full h-full
              object-cover
              rounded-lg
              border border-yellow-400
              transition duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* TITLE */}
        <div className="px-3 pb-3 text-center">
          <h3 className="text-sm sm:text-base font-semibold text-gray-100 leading-snug line-clamp-2">
            {meal.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
