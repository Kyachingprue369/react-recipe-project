import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import Header from '../Header/Header/Header';
import OurRecipe from '../OurRecipe/OurRecipe';
import Recipes from '../Recipes/Recipes';
import Sidebar from '../Sidebar/Sidebar';


const Main = () => {
  const [recipeCategories, setRecipeCategories] = useState([]);

  const handleRecipeCard = recipe => {
    const isExist = recipeCategories.find(recipeCategory => recipeCategory.id === recipe.id)
    if (!isExist) {
      const newRecipe = [...recipeCategories, recipe]
      setRecipeCategories(newRecipe);
      console.log(newRecipe);
    }
    else {
      alert('This card already exist so do not try again')
    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <OurRecipe></OurRecipe>
      <div className='w-11/12 mx-auto flex'>
        <Recipes handleRecipeCard={handleRecipeCard}></Recipes>
        <Sidebar recipeCategories={recipeCategories}></Sidebar>
      </div>
    </div>
  );
};

export default Main;