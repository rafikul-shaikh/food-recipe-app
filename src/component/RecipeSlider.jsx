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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // < 640px
        settings: {
          slidesToShow: 1,
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
      {/* TITLE — mobile First Design  */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 mb-4 flex items-center px-3">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
        {title}
      </h2>

      {/* SLIDER WRAPPER — first Design at 390px */}
      <div className="w-full  px-10 sm:px-15 lg:px-20 overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="px-3 sm:px-4 md:px-4 lg:px-10 flex justify-center md:gap-10"
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
