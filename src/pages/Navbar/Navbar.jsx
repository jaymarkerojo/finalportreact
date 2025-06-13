import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const links = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'About', href: '#about' },
    { id: 3, text: 'Skills', href: '#skills' },
    { id: 4, text: 'Projects', href: '#projects' },
    { id: 5, text: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleResizeOrScroll = () => setNavOpen(false);
    window.addEventListener('scroll', handleResizeOrScroll);
    window.addEventListener('resize', handleResizeOrScroll);
    return () => {
      window.removeEventListener('scroll', handleResizeOrScroll);
      window.removeEventListener('resize', handleResizeOrScroll);
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm shadow-md z-50">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-sky-400">Jaymark</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-slate-200 font-medium">
          {links.map(({ id, text, href }) => (
            <li key={id}>
              <a
                href={href}
                className={`transition-colors duration-300 hover:text-sky-400 ${
                  activeLink === href ? 'text-sky-400' : ''
                }`}
                onClick={() => handleLinkClick(href)}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-200 text-2xl focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {navOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-sm text-slate-100 flex flex-col items-center gap-6 py-6 animate-slide-down">
          {links.map(({ id, text, href }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => handleLinkClick(href)}
                className={`text-lg transition-colors duration-300 hover:text-sky-400 ${
                  activeLink === href ? 'text-sky-400' : ''
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
