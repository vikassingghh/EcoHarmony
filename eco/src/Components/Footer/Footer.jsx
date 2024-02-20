// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-100 from-10% via-green-200 via-30% to-green-300 to-90%  p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex flex-col flex-wrap items-center sm:flex-row">
          <p className="mr-2 mb-2 sm:mb-0">© 2024 Eco Harmony</p>
          <p className="mr-2 mb-2 sm:mb-0">Terms of Service</p>
          <p className="mr-2 mb-2 sm:mb-0">Privacy Policy</p>
          <p className="mr-2 mb-2 sm:mb-0">Sitemap</p>
        </div>
        <div>
          <p>Contact us: contact@ecoharmony.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

