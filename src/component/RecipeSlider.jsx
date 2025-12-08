import React from "react";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  // console.log("Calling meal data = ", data?.meals);
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
        <div style={{ width: "90%", margin: "auto", padding: "10px" }}>
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="px-10 flex justify-center">
                <RecipeCard meal={meal} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RecipeSlider;
