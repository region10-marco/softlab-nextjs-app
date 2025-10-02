import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Anderson',
    position: 'CEO',
    image: 'https://source.unsplash.com/random/200x200?face1',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Sarah Williams',
    position: 'Lead Designer',
    image: 'https://source.unsplash.com/random/200x200?face2',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Michael Chen',
    position: 'Full Stack Developer',
    image: 'https://source.unsplash.com/random/200x200?face3',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Emma Rodriguez',
    position: 'Marketing Director',
    image: 'https://source.unsplash.com/random/200x200?face4',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
      dribbble: '#',
    },
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member"
            whileHover={{ scale: 1.1 }}
          >
            <div className="image-container">
              <img src={member.image} alt={member.name} />
              <div className="overlay">
                <div className="social-icons">
                  <a href={member.social.twitter}>Twitter</a>
                  <a href={member.social.linkedin}>LinkedIn</a>
                  <a href={member.social.github}>GitHub</a>
                  <a href={member.social.dribbble}>Dribbble</a>
                </div>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
