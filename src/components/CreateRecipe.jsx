import React, { useState } from 'react';

const CreateRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(), 
      title,
      ingredients: ingredients.split(",").map(ingredient => ingredient.trim()),
      image,
    };

    addRecipe(newRecipe);
    saveToLocalStorage(newRecipe); 


    setTitle("");
    setIngredients("");
    setImage("");
  };

  const saveToLocalStorage = (newRecipe) => {
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    existingRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(existingRecipes));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center text-green-600">Crea tu platillo :D</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Ingresa el nombre del platillo</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Refuerzo de aire"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Ingresa los ingredientes</h2>
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="tomato,onion .."
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mt-2">Agrega una URL de imagen para tu platillo!</h2>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded-lg p-3 w-full hover:bg-green-600 transition shadow-lg"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
