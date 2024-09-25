import React from 'react';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const bakeryItems = [
    { id: 1, name: 'Chocolate Croissant', price: 3.50, image: '/placeholder.svg' },
    { id: 2, name: 'Sourdough Bread', price: 5.00, image: '/placeholder.svg' },
    { id: 3, name: 'Blueberry Muffin', price: 2.75, image: '/placeholder.svg' },
    { id: 4, name: 'Cinnamon Roll', price: 3.25, image: '/placeholder.svg' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to Our Bakery</h2>
          <p className="text-lg">Indulge in our freshly baked goods made with love and the finest ingredients.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Popular Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bakeryItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default Index;
