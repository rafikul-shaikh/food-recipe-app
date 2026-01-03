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
    arrows: true,
    slidesToShow: 3, // 👈 MOBILE FIRST (390px)
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="text-center py-6 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-yellow-600" />
        Loading {title}...
      </div>
    );
  }

  return (
    <section className="mb-8">
      {/* TITLE — MOBILE FIRST */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 mb-4 flex items-center px-3">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
        {title}
      </h2>

      {/* SLIDER WRAPPER — SAFE FOR 390px */}
      <div className="w-full px-2 sm:px-4 md:px-6 overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 sm:px-3 flex justify-center">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
