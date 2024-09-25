import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">We'd love to hear from you! Whether you have a question about our products, want to place a special order, or just want to say hello, please don't hesitate to reach out.</p>
          <div className="mb-4">
            <h3 className="font-semibold">Address:</h3>
            <p>123 Main Street, Anytown, USA 12345</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Phone:</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Email:</h3>
            <p>info@sweetdelightsbakery.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;