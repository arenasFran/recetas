import { useEffect,useState } from "react";
import axios from 'axios'
import "../styles.css"

const SearchRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState("tomato, cheese");
  const apiKey = "a242bb8bc729421ebc85954e4eeb8415";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recepies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [ingredients]);

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };
  if (loading) return <div>Cargando...</div>;

  return (
    <div className="p-4">
      <input
        type="text"
        value={ingredients}
        onChange={handleChange}
        placeholder="Ingresa ingredientes separados por comas"
        className="border border-gray-300 rounded p-2 w-full mb-4"
      />
      <button className="bg-blue-500 text-white rounded p-3  hover:bg-blue-600 transition" onClick={() => setLoading(true)}>Buscar recetas</button>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded p-4 shadow">
            <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
            <img className="w-full h-48 object-cover rounded" src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default SearchRecipe