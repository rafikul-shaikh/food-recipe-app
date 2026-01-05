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
    speed: 1800,
    autoplaySpeed: 0,
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

      {/* SLIDER WRAPPER — first Design at 390px  */}
      <div className="w-full mb-20 px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 flex justify-center ">
              <Link to={`/recipe/${meal.idMeal}`} className="block">
                {/* Card */}
                <div
                  className=" relative bg-gray-800 rounded-xl py-6 px-4 shadow-xl 
                shadow-black/50 overflow-hidden group border border-gray-800 hover:shadow-blue-600/50
                 w-28 h-28         
                sm:w-32 sm:h-32    
                md:w-36 md:h-36    
                lg:w-40 lg:h-40   
                xl:w-44 xl:h-44 "
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-transparent
                   group-hover:border-blue-500/80 transition duration-500"
                  ></div>

                  {/*  IMAGE  */}
                  <img
                    src={meal?.strMealThumb}
                    alt=""
                    className="w-full h-full rounded-lg transition duration-500 group-hover:scale-105 object-cover"
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
