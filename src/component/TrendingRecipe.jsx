import React from "react";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  // console.log("Calling meal data = ", data?.meals);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: () => null,
    customPaging: () => null,

    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // very small phones
        settings: {
          slidesToShow: 1,
        },
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
    <>
      <section>
        <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center">
          <Clock className="w-6 h-6 mr-3 text-blue-600" />
          {title}
        </h2>
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="px-3 sm:px-6 flex justify-center"
              >
                <Link to={`/recipe/${meal.idMeal}`}>
                  <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 mb-8">
                    {/* for hover Glow */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>
                    <div className="flex justify-center items-center p-3 sm:p-5">
                      <img
                        src={meal?.strMealThumb}
                        alt=""
                        className="w-full max-w-[160px] h-auto rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105 object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TrendingRecipe;
