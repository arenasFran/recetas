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
            <Link to="/about" className="text-white hover:text-yellow-300 transition">
              Our recipes
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-yellow-300 transition">
              Create recipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
