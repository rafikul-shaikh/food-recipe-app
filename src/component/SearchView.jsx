import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SearchView = ({ meals, loading }) => {
  return (
    <>
      <main className=" m-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <Link
          to={"/"}
          className="text-yellow-400 hover:text-yellow-300 flex items-center mb-6 font-medium transition text-lg group"
        >
          <ChevronLeft className="w-6 h-6 mr-1 transition" />
          Back to Dashboard
        </Link>
      </main>
    </>
  );
};

export default SearchView;
