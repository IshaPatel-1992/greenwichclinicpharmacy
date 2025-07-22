import React, { useState } from 'react';
import logo from '../assets/logopharmacy-Photoroom.jpg'; // Your logo path here
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo only */}
        <a href="#home">
           <img
  src={logo}
  alt="Greenwich Pharmacy"
  className="h-16 w-auto rounded-xl border-2 border-teal-700 shadow-lg hover:shadow-yellow-400 transition duration-500 ease-in-out animate-glow hover:scale-105 cursor-pointer"
/>         </a>
       

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-12 text-teal-800 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {menuItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-yellow-400 transition duration-300 tracking-wide text-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-teal-800 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Vertical Menu */}
      <nav
        className={`md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-lg px-6 pb-6 space-y-4 text-teal-800 font-semibold transform transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {menuItems.map(item => (
          <a
            key={item.label}
            href={item.href}
            className="block py-2 border-b border-teal-200 hover:text-yellow-400 transition duration-200 text-lg"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
