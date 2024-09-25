import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-100 text-amber-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Sweet Delights Bakery</h3>
            <p>123 Main Street, Anytown, USA 12345</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Hours</h3>
            <p>Monday - Friday: 7am - 7pm</p>
            <p>Saturday: 8am - 6pm</p>
            <p>Sunday: 8am - 3pm</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-800 hover:text-amber-600">Facebook</a>
              <a href="#" className="text-amber-800 hover:text-amber-600">Instagram</a>
              <a href="#" className="text-amber-800 hover:text-amber-600">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Sweet Delights Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;