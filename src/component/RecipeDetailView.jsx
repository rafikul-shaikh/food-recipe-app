import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { API_URL } from "./useFetch";
import { Loader } from "lucide-react";

const RecipeDetailView = () => {
  // console.log(useParams());
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`);
  // console.log("Single meal recipe = ", data?.meals[0]);
  const meal = data?.meals?.[0];
  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-yellow-600" />
        Preparing your recipe card details...
      </div>
    );

  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default RecipeDetailView;
