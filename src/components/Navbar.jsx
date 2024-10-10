import React from "react";
import "../styles.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="list-none flex space-x-4">
          <li><a href="#">Buscar recetas</a></li>
          <li><a href="#">Nuestras recetas</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
