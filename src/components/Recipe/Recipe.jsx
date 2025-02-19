import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { FaFireAlt } from 'react-icons/fa';

const Recipe = ({ recipe, handleRecipeCard }) => {
  const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
  return (
    <div className='mx-auto mb-8'>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className='w-full h-[250px] object-cover'
            src={recipe_image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className='border-b-2 pb-5 text-gray-400'>{short_description}</p>
          <h4 className='font-bold'>Ingredients: {ingredients.length}</h4>
          <ul className='text-gray-400 pb-5 border-b-2'>
            {
              ingredients.map((ingredient, idx) => <li key={idx}> • {ingredient}</li>)
            }
          </ul>
          <div className='flex justify-between items-center'>
            <p className='flex items-center gap-1'><CiClock2 /> {preparing_time}</p>
            <p className='flex items-center gap-1'><FaFireAlt /> {calories} calories </p>
          </div>
          <div className="card-actions justify-start">
            <button onClick={() => handleRecipeCard(recipe)} className="btn mt-6 bg-green-400 rounded-3xl font-bold">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;