import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({ handleRecipeCard }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('Recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  return (
    <div className='md:w-2/3 mr-5 bg-slate-200 rounded-2xl'>
      <div className='grid md:grid-cols-2 mt-9 gap-2'>
        {
          recipes.map(recipe => <Recipe key={recipe.id} handleRecipeCard={handleRecipeCard} recipe={recipe}>
          </Recipe>)
        }
      </div>
    </div>
  );
};

export default Recipes;