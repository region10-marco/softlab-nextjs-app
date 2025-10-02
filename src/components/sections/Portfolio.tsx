import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  { id: 1, title: 'Project 1', category: 'Web', img: 'https://source.unsplash.com/random/300x200?web' },
  { id: 2, title: 'Project 2', category: 'Mobile', img: 'https://source.unsplash.com/random/300x200?mobile' },
  { id: 3, title: 'Project 3', category: 'Design', img: 'https://source.unsplash.com/random/300x200?design' },
  { id: 4, title: 'Project 4', category: 'Branding', img: 'https://source.unsplash.com/random/300x200?branding' },
  { id: 5, title: 'Project 5', category: 'Web', img: 'https://source.unsplash.com/random/300x200?web' },
  { id: 6, title: 'Project 6', category: 'Mobile', img: 'https://source.unsplash.com/random/300x200?mobile' },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.1 });

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section ref={ref} className="portfolio">
      <h2>My Projects</h2>
      <div className="categories">
        {['All', 'Web', 'Mobile', 'Design', 'Branding'].map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid">
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            className="project"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <button>View Project</button>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .portfolio {
          padding: 20px;
        }
        .categories {
          margin-bottom: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .project {
          position: relative;
          overflow: hidden;
        }
        .project img {
          width: 100%;
          height: auto;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;