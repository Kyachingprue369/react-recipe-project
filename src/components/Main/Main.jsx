import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import Header from '../Header/Header/Header';
import OurRecipe from '../OurRecipe/OurRecipe';
import Recipes from '../Recipes/Recipes';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';


const Main = () => {
  const [recipeCategories, setRecipeCategories] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const handleRecipeCard = recipe => {
    const isExist = recipeCategories.find(recipeCategory => recipeCategory.id === recipe.id)
    if (!isExist) {
      const newRecipe = [...recipeCategories, recipe]
      setRecipeCategories(newRecipe);
    }
    else {
      toast.error('🦄 sorry already exist!',);
    }
  }

  const handleRemovePrepared = id => {
    const deletedRecipe = recipeCategories.find(recipe => recipe.id === id)
    const updatedRecipe = recipeCategories.filter(recipe => recipe.id !== id)
    setRecipeCategories(updatedRecipe)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  const handleTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)
  }
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <OurRecipe></OurRecipe>
      <div className='w-11/12 mx-auto flex'>
        <Recipes handleRecipeCard={handleRecipeCard}></Recipes>
        <Sidebar
          handleRemovePrepared={handleRemovePrepared}
          recipeCategories={recipeCategories}
          preparedRecipe={preparedRecipe}
          totalTime={totalTime}
          totalCalories={totalCalories}
          handleTimeAndCalories={handleTimeAndCalories}>
        </Sidebar>
      </div>
      <ToastContainer />
    </div>
  );
};


export default Main;