import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-3xl mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={formState.name} onChange={handleChange} className="w-full p-2 rounded" placeholder="Name" required />
        <input name="email" value={formState.email} onChange={handleChange} className="w-full p-2 rounded" placeholder="Email" required />
        <input name="subject" value={formState.subject} onChange={handleChange} className="w-full p-2 rounded" placeholder="Subject" required />
        <textarea name="message" value={formState.message} onChange={handleChange} className="w-full p-2 rounded" placeholder="Message" required></textarea>
        <button type="submit" className="bg-white text-blue-500 p-2 rounded">Send</button>
      </form>
      <div className="mt-6 space-y-4">
        <div className="flex items-center text-white">
          <i className="fas fa-envelope mr-2"></i>
          <span>hello@softlab.com</span>
        </div>
        <div className="flex items-center text-white">
          <i className="fas fa-phone mr-2"></i>
          <span>+1 555 123-4567</span>
        </div>
        <div className="flex items-center text-white">
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>Your Address Here</span>
        </div>
      </div>
      <div className="mt-6 text-white">
        <h3 className="text-2xl">Office Hours</h3>
        <p>Monday - Friday: 9 AM - 5 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contact;