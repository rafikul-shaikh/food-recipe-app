import Navbar from "./component/Navbar";
import Cuisine from "./component/Cuisine";
import HomeView from "./component/HomeView";
import RecipeDetailView from "./component/RecipeDetailView";
import RecipeCard from "./component/RecipeCard";
import SearchView from "./component/SearchView";
import RecipeSlider from "./component/RecipeSlider";
import TrendingRecipe from "./component/TrendingRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
const API_URL = "https://www.themealdb.com/api/json/v1/1/";

function App() {
  const [seachQuary, setSearchQuary] = useState("");
  const [seachResult, setSeachresult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = useCallback(async (query) => {
    setSearchQuary(query);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const result = await res.json();
      setSeachresult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-900 font-sans text-gray-200">
          <Navbar />
          <Cuisine />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route path="/recipe/:quary" element={<SearchView />} />
          </Routes>
        </div>
      </Router>
      ;
    </>
  );
}

export default App;
