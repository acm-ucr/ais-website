// src/components/Footer.jsx
import React from 'react';
import { icons } from '../data/icons'; // Correct relative path to icons.js

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#003366', color: '#FFFFFF', padding: '20px', textAlign: 'center' }}>
      <img src="/AIS.svg" alt="AIS Logo" style={{ width: '100px', marginBottom: '10px' }} />
      <h2>Association for Information Systems at UCR</h2>
      <p>Reach out to us today: <a href="mailto:aisatucr@gmail.com" style={{ color: '#FFFFFF' }}>aisatucr@gmail.com</a></p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {icons.map(({ name, icon: Icon, link }) => (
          <a key={name} href={link} style={{ color: '#FFFFFF', fontSize: '24px' }}>
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
