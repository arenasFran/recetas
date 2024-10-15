import React from 'react';

const OurRecipes = ({ recipes, removeRecipe }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center text-green-600">Nuestras Recetas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length === 0 ? (
          <div className="text-center">No hay recetas disponibles.</div>
        ) : (
          recipes.map((recipe, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
              <h2 className="p-4 font-bold text-gray-800">{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <button onClick={() => removeRecipe(recipe.id)} className='bg-red-500 text-white rounded-lg p-2 mt-2 hover:bg-red-600 transition'>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OurRecipes;
