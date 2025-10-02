import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaRocket, FaMobile, FaPalette, FaChartLine, FaLock, FaHeadset } from 'react-icons/fa';

const features = [
  { icon: <FaRocket />, title: 'Fast Performance', description: 'Lightning-fast load times', gradient: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { icon: <FaMobile />, title: 'Fully Responsive', description: 'Perfect display on all devices', gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
  { icon: <FaPalette />, title: 'Modern Design', description: 'Beautiful and clean design', gradient: 'bg-gradient-to-r from-orange-500 to-red-500' },
  { icon: <FaChartLine />, title: 'SEO Optimized', description: 'Built with SEO best practices', gradient: 'bg-gradient-to-r from-green-500 to-emerald-500' },
  { icon: <FaLock />, title: 'Secure & Safe', description: 'Enterprise-level security', gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
  { icon: <FaHeadset />, title: '24/7 Support', description: 'Round-the-clock support', gradient: 'bg-gradient-to-r from-pink-500 to-rose-500' },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Amazing Features</h2>
        <p className="text-lg mb-8">Powerful features to help you build and grow your business</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const [ref, inView] = useInView({ threshold: 0.1 });
            return (
              <motion.div
                key={index}
                ref={ref}
                className={`p-6 rounded-lg shadow-lg ${feature.gradient} text-white relative transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:scale-105`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 rounded-lg"></div>
                <div className="flex items-center justify-center h-12 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
