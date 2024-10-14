import { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const SearchRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState("");
  const apiKey = "a242bb8bc729421ebc85954e4eeb8415";

  const ingredientList = [
    "tomato",
    "cheese",
    "chicken",
    "garlic",
    "beef",
    "potato",
    "spinach",
    "feta",
    "pasta",
    "pesto",
    "fish",
    "lemon",
    "rice",
    "beans",
    "broccoli",
    "carrot"
  ];


  useEffect(() => {

    const getRandomIngredients = () =>{
      const numberOfIngredients = Math.floor(Math.random() * 3) + 1
      const selectedIngredients = [];
      const handleIngredients = [...ingredientList].sort(() => 0.5 - Math.random())
      for (let i = 0; i < numberOfIngredients; i++) {
        selectedIngredients.push(handleIngredients[i]);
      }
      return selectedIngredients.join(", ");
    }
    const randomIngredients = getRandomIngredients();
    setIngredients(randomIngredients);

    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [ingredients]);

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  if (loading) return <div className="text-center">Cargando...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center text-green-600">
        Discover Recipes
      </h1>
      <input
        type="text"
        value={ingredients}
        onChange={handleChange}
        placeholder="Ingresa ingredientes separados por comas"
        className="border border-gray-300 rounded-lg p-3 w-full mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
      />
      <button className="bg-green-500 text-white rounded-lg p-3 w-full hover:bg-green-600 transition shadow-lg">
        Buscar recetas
      </button>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
          >
            <img
              className="w-full h-48 object-contain"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">
                {recipe.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipe;
