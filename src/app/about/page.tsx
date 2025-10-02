import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStar, FaHandshake, FaLightbulb } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="hero bg-gradient-to-r from-[#667eea] to-[#764ba2] p-10 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
      </section>
      <section className="story p-10">
        <h2>Our Story</h2>
        <img src="/path-to-image.jpg" alt="Our Story" />
      </section>
      <section className="mission-vision grid grid-cols-2 p-10">
        <div className="mission">
          <h3>Mission</h3>
          <p>Your mission statement here.</p>
        </div>
        <div className="vision">
          <h3>Vision</h3>
          <p>Your vision statement here.</p>
        </div>
      </section>
      <section className="core-values grid grid-cols-4 p-10">
        <div><FaLightbulb /> Innovation</div>
        <div><FaStar /> Vision</div>
        <div><FaRocket /> Passion</div>
        <div><FaHandshake /> Collaboration</div>
      </section>
      <section className="cta p-10">
        <h2>Join Us</h2>
        <button className="bg-white text-[#667eea]">Get Started</button>
      </section>
    </motion.div>
  );
};

export default AboutPage;