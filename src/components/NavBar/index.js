import React from 'react';
import { Link } from 'react-router-dom';
 
const NavBar = () => {
 
  return (
    
      <header className="bg-blue-500 py-4">
          <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white text-2xl font-semibold">Replic Challenge</h1>
              <nav>
                  <a href="/home" className="text-white mx-4 hover:text-gray-300">Home</a>
                  <a href="/productlist" className="text-white mx-4 hover:text-gray-300">Product List</a>
                  <a href="/cart" className="text-white mx-4 hover:text-gray-300">Cart</a>
              </nav>
          </div>
      </header> 
      
  );
}
export default NavBar;