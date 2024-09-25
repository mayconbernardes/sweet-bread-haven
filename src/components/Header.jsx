import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-amber-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-800">Sweet Delights Bakery</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-amber-800 hover:text-amber-600">Home</a></li>
            <li><a href="#" className="text-amber-800 hover:text-amber-600">Menu</a></li>
            <li><a href="#" className="text-amber-800 hover:text-amber-600">About</a></li>
            <li><a href="#" className="text-amber-800 hover:text-amber-600">Contact</a></li>
          </ul>
        </nav>
        <button className="text-amber-800 hover:text-amber-600">
          <ShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;