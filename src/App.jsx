import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchRecipe from "./components/SearchRecipe";
import OurRecipes from "./components/OurRecipes";
import CreateRecipe from "./components/CreateRecipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      return updatedRecipes;
    });
  };

  const removeRecipe = (id) => {
    setRecipes((prevRecipes) => {
      const updateRecipes = prevRecipes.filter((recipe) => recipe.id !== id);
      localStorage.setItem("recipes", JSON.stringify(updateRecipes));
      return updateRecipes;
    });
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchRecipe recipes={recipes} />} />
        <Route
          path="/our-recipes"
          element={<OurRecipes recipes={recipes} removeRecipe={removeRecipe} />}
        />
        <Route
          path="/create-recipe"
          element={<CreateRecipe addRecipe={addRecipe} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
