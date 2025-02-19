import React from 'react';

const Header = () => {
  return (
    <div className='w-11/12 mx-auto my-4'>
      <div
        className="hero min-h-[600px]"
        style={{
          borderRadius: '16px',
          backgroundImage: "url(https://i.ibb.co.com/Lht9yP1t/recipe-creater.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full mx-auto">
            <h1 className="mb-5 text-5xl text-white font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="mb-5 mt-10">
              Learn and Master Basic Programming, Data structure, Algorithm, OOP, Database and solve 500+ coding <br /> Problems to become an exceptionally well world-class Programmer.
            </p>
            <div className='flex justify-center mt-12 items-center gap-3'>
              <button className="btn bg-green-500 text-black font-bold text-xl px-5 rounded-3xl border-none">Explore Now</button>
              <button className="btn bg-inherit rounded-3xl text-white font-bold text-xl">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;