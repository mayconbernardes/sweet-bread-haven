import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Sweet Delights Bakery</h1>
      <div className="prose max-w-none">
        <p>Sweet Delights Bakery has been serving our community with delicious, freshly-baked goods since 1985. Our passion for baking and commitment to quality ingredients has made us a beloved local institution.</p>
        <p>Our team of skilled bakers starts each day before dawn, crafting a wide variety of breads, pastries, and cakes using time-honored techniques and recipes passed down through generations.</p>
        <p>At Sweet Delights, we believe in:</p>
        <ul>
          <li>Using only the finest, locally-sourced ingredients</li>
          <li>Baking everything fresh daily</li>
          <li>Providing exceptional customer service</li>
          <li>Supporting our local community</li>
        </ul>
        <p>We're more than just a bakery - we're a part of your daily routine, your special celebrations, and your cherished memories. Thank you for choosing Sweet Delights Bakery.</p>
      </div>
    </div>
  );
};

export default About;