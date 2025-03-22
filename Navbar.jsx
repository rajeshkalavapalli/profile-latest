import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import react-scroll

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#5f27a7] font-bold text-xl">Rajesh.K</div>
        <div className="hidden md:flex space-x-4 text-[#117554]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#117554] focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.829 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.828 4.829 4.828-4.829a1 1 0 0 1 1.414 1.414l-4.829 4.828 4.829 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 text-[#117554]">
          <Link to="home" smooth={true} duration={500} className="block py-2">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="block py-2">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="block py-2">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="block py-2">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="block py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;