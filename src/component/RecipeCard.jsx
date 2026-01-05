import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block">
      {/* CARD */}
      <div
        className="
            relative
            w-full
            max-w-[180px]
            sm:max-w-[220px]
            lg:max-w-[260px]
            xl:max-w-[280px]
            bg-gray-800
            rounded-xl
            shadow-lg shadow-black/40
            overflow-hidden  group
            transition duration-500 cursor-pointer border border-gray-800
            hover:shadow-blue-600/40
            flex flex-col
          "
      >
        {/* Hover Glow */}
        <div
          className="absolute inset-0 rounded-xl border-2 border-transparent
                   group-hover:border-blue-500/80 transition duration-500"
        ></div>

        {/* IMAGE */}
        <div className="aspect-square p-3 sm:p-6">
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
