import { useEffect, useState } from "react";
import axios from "axios";

const SearchRecipe = ({ recipes }) => {
  const [loading, setLoading] = useState(true);
  const [inputIngredients, setInputIngredients] = useState("bacon");
  const [ingredients, setIngredients] = useState("bacon");
  const [apiRecipes, setApiRecipes] = useState([]);
  const apiKey = "a242bb8bc729421ebc85954e4eeb8415";

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
        );
        setApiRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [ingredients]);

  const handleChange = (e) => {
    setInputIngredients(e.target.value);
  };

  const handleSearch = () => {
    setIngredients(inputIngredients);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Combina las recetas de la API con las locales y filtra por ingredientes
  const combinedRecipes = [...apiRecipes, ...recipes].filter(recipe => {
    const recipeIngredients = recipe.ingredients || []; // Asegúrate de que la propiedad `ingredients` exista
    return recipeIngredients.some(ingredient => 
      ingredient.toLowerCase().includes(ingredients.toLowerCase())
    );
  });

  if (loading) return <div className="text-center">Cargando...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-5">
      <h1 className="text-2xl font-semibold mb-4 text-center text-green-600">Discover Recipes</h1>
      <input
        type="text"
        value={inputIngredients}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ingresa ingredientes separados por comas"
        className="border border-gray-300 rounded-lg p-3 w-full mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 text-white rounded-lg p-3 w-full hover:bg-green-600 transition shadow-lg"
      >
        Buscar recetas
      </button>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinedRecipes.length === 0 ? (
          <div className="text-center">No se encontraron recetas para esos ingredientes.</div>
        ) : (
          combinedRecipes.map((recipe) => (
            <div key={recipe.id} className="border rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <img
                className="w-full h-48 object-contain"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{recipe.title}</h2>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
