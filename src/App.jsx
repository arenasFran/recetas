import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchRecipe from './components/SearchRecipe';
import About from './components/About';
import CreateRecipe from './components/CreateRecipe';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
};


export default App