import React, { useState, useEffect } from 'react';
import Navbar from '../api1/navbar';
import { Link } from "react-router-dom";

import "./api2.css";

const Api2page = () => {
  const [recipes, setRecipes] = useState([]);
  const apiKey = '02f6d3523ed94387805c40c34f51ffda'; 

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=20&apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data.results); 
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [apiKey]);

  return (
    <div>
      <Navbar />
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Api2page };
