import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">Rajesh</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="hero" smooth={true} className="cursor-pointer hover:text-gray-400">
              Home
            </Link>
            <Link to="about" smooth={true} className="cursor-pointer hover:text-gray-400">
              About
            </Link>
            <Link to="projects" smooth={true} className="cursor-pointer hover:text-gray-400">
              Projects
            </Link>
            <Link to="contact" smooth={true} className="cursor-pointer hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link to="hero" smooth={true} className="block py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="about" smooth={true} className="block py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="projects" smooth={true} className="block py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="contact" smooth={true} className="block py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
