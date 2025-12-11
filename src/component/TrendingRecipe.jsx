import React from "react";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-yellow-600" />
        Loading {title}...
      </div>
    );

  return (
    <section>
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight pl-4 flex items-center">
        <Clock className="w-6 h-6 mr-3 text-blue-600" />
        {title}
      </h2>

      {/* IMPORTANT: WRAPPING FIX */}
      <div className="w-full px-2 sm:px-4 overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 flex justify-center">
              <Link to={`/recipe/${meal.idMeal}`} className="block">
                <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group border border-gray-800 hover:shadow-blue-600/50">
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

                  {/* RESPONSIVE IMAGE FIX */}
                  <img
                    src={meal?.strMealThumb}
                    alt=""
                    className="w-full max-w-[180px] h-auto rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105 object-cover m-auto"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingRecipe;
