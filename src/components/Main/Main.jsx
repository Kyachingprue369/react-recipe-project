import React from 'react';
import Navbar from '../Header/Navbar';
import Header from '../Header/Header/Header';
import OurRecipe from '../OurRecipe/OurRecipe';
import Recipes from '../Recipes/Recipes';
import Sidebar from '../Sidebar/Sidebar';


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <OurRecipe></OurRecipe>
      <div className='w-11/12 mx-auto flex'>
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Main;