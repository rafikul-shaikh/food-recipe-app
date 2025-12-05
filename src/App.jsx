import Navbar from "./component/Navbar";
import Cuisine from "./component/Cuisine";
import HomeView from "./component/HomeView";
import RecipeCard from "./component/RecipeCard";
import SearchView from "./component/SearchView";
import RecipeSlider from "./component/RecipeSlider";
import TrendingRecipe from "./component/Trendingrecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route></Route>
          </Routes>
        </div>
      </Router>
      ;
    </>
  );
}

export default App;
