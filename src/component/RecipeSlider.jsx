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
    arrows: true, // ✅ ENABLE ARROWS
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: true, // ✅ FORCE ARROWS ON MOBILE
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="text-center p-6 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-yellow-600" />
        Loading {title}...
      </div>
    );
  }

  return (
    <section className="mb-8">
      {/* RESPONSIVE TITLE */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 mb-4 sm:mb-6 tracking-tight pl-3 sm:pl-4 flex items-center">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
        {title}
      </h2>

      {/* SLIDER */}
      <div className="w-full px-1 sm:px-4 overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="px-1 sm:px-10  flex justify-center"
            >
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
