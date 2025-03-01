import React from 'react';
import notfound from '../assets/img/404.jpeg';
const NotFound = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-offwhite font-work text-secondary p-4">
      <div className="max-w-md text-center">
      <img
          src={notfound}
          alt="404"
          className="mx-auto"
        />
        
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">
          Oops! The page you are looking for doesn't exist.
        </p>
        
        
      </div>
    </div>
  );
};

export default NotFound;
