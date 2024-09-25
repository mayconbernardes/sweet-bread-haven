import React from 'react';
import { Button } from "@/components/ui/button";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;