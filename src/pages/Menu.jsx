import React from 'react';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Chocolate Croissant', price: 3.50, image: '/placeholder.svg' },
    { id: 2, name: 'Sourdough Bread', price: 5.00, image: '/placeholder.svg' },
    { id: 3, name: 'Blueberry Muffin', price: 2.75, image: '/placeholder.svg' },
    { id: 4, name: 'Cinnamon Roll', price: 3.25, image: '/placeholder.svg' },
    { id: 5, name: 'Apple Pie', price: 12.00, image: '/placeholder.svg' },
    { id: 6, name: 'Baguette', price: 4.50, image: '/placeholder.svg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;