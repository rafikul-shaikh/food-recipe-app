import React from "react";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
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

      {/* RESPONSIVE FIX */}
      <div className="w-full px-2 sm:px-4 overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 flex justify-center">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
