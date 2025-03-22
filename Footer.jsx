import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a237e] text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;