'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaMobileAlt, FaPaintBrush, FaBullhorn, FaCloud, FaCog } from 'react-icons/fa'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance.',
      features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Database Design'],
    },
    {
      icon: FaMobileAlt,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['React Native', 'iOS & Android', 'App Store Deploy', 'Push Notifications'],
    },
    {
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that deliver exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to grow your brand and reach your target audience.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
      features: ['AWS & Azure', 'CI/CD Pipeline', 'Auto Scaling', 'Monitoring'],
    },
    {
      icon: FaCog,
      title: 'Consulting',
      description: 'Expert technology consulting to help you make the right decisions for your business.',
      features: ['Tech Stack', 'Architecture', 'Best Practices', 'Code Review'],
    },
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-3xl text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 group-hover:text-white transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-primary-500 group-hover:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
