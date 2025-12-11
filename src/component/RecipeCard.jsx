import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
      <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50">
        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

        <div className="flex justify-center items-center p-3 sm:p-5">
          <img
            src={meal?.strMealThumb}
            alt=""
            className="
              w-full 
              max-w-[200px] 
              sm:max-w-[240px] 
              rounded-xl 
              border border-yellow-400 
              transition duration-500 
              group-hover:scale-105
            "
          />
        </div>

        <div className="p-2 text-center">
          <h1 className="text-lg sm:text-xl font-bold text-gray-100 pb-3 group-hover:text-blue-400 transition duration-300">
            {meal.strMeal}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
