import React from 'react';

const Sidebar = ({ recipeCategories }) => {
  console.log(recipeCategories)
  return (
    <div className='md:w-1/3 bg-gray-200 rounded-xl'>
      <h3 className='text-center w-10/12 mx-auto font-bold text-xl border-b-2 border-gray-400 py-5 text-black'>What to Cook: {recipeCategories.length}</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>

              {
                recipeCategories.map((recipeCategory, index) =>
                  <tr key={recipeCategory.id} className="bg-base-200">
                    <th>{index + 1}</th>
                    <td>{recipeCategory.recipe_name}</td>
                    <td>{recipeCategory.preparing_time}</td>
                    <td>{recipeCategory.calories}</td>
                    <button className='btn mt-2 bg-green-400 rounded-3xl mr-2'>Preparing</button>
                  </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;