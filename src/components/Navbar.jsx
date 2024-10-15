import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-xl font-bold">Recipe Finder</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/our-recipes" className="text-white hover:text-yellow-300 transition">
              Our Recipes
            </Link>
          </li>
          <li>
            <Link to="/create-recipe" className="text-white hover:text-yellow-300 transition">
              Create Recipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
