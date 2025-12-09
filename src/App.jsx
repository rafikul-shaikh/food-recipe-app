import Navbar from "./component/Navbar";
import Cuisine from "./component/Cuisine";
import HomeView from "./component/HomeView";
import RecipeDetailView from "./component/RecipeDetailView";
import RecipeCard from "./component/RecipeCard";
import SearchView from "./component/SearchView";
import RecipeSlider from "./component/RecipeSlider";
import TrendingRecipe from "./component/TrendingRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
const API_URL = "https://www.themealdb.com/api/json/v1/1/";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const filterRecipe = useCallback(async (query, filterType) => {
    setSearchResult(query);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  // filter by category
  const filterByCategory = useCallback(
    (category) => {
      filterRecipe(category, "c");
    },
    [filterRecipe]
  );

  // filter by area
  const filterByArea = useCallback(
    (area) => {
      filterRecipe(area, "a");
    },
    [filterRecipe]
  );

  const handleSearch = useCallback(async (query) => {
    setSearchResult(query);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const result = await res.json();
      setSearchResult(result?.meals || []);
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
          <Navbar handleSearch={handleSearch} />
          <Cuisine filterByArea={filterByArea} />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route
              path="/search/:query"
              element={
                <SearchView meals={searchResult} loading={searchLoading} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
