import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItemsCount } = useCart();

  return (
    <header className="bg-amber-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-800">Sweet Delights Bakery</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-amber-800 hover:text-amber-600">Home</Link></li>
            <li><Link to="/menu" className="text-amber-800 hover:text-amber-600">Menu</Link></li>
            <li><Link to="/about" className="text-amber-800 hover:text-amber-600">About</Link></li>
            <li><Link to="/contact" className="text-amber-800 hover:text-amber-600">Contact</Link></li>
            <li><Link to="/snake" className="text-amber-800 hover:text-amber-600">Play Snake</Link></li>
          </ul>
        </nav>
        <Link to="/cart" className="text-amber-800 hover:text-amber-600 relative">
          <ShoppingCart size={24} />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemsCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
