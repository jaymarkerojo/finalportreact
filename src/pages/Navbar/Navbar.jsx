import React, { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black fixed top-0 left-0 w-full shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <h1 className="font-bold text-xl text-gray-800 text-white m-5">Jaymark</h1>

        <div className="py-[20px] flex justify-between items-center">
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700 cursor-pointer">
            <li className='transition-transform hover:scale-110 text-white'>
              <a
                href="#home"
                onClick={() => setMenu("home")}
                className={menu === "home" ? "pb-[2px] border-b-[2px] border-[#text-[#38BDF8]]" : ""}
              >
                home
              </a>
            </li>
            <li className=' text-[#38BDF8] text-white transition-transform hover:scale-110'>
              <a
                href="#about"
                onClick={() => setMenu("about")}
                className={menu === "about" ? "pb-[2px] border-b-[2px] border-[#38BDF8]" : ""}
              >
                about
              </a>
            </li>
            <li className='text-[#38BDF8] text-white transition-transform hover:scale-110'>
              <a
                href="#skills"
                onClick={() => setMenu("skills")}
                className={menu === "skills" ? "pb-[2px] border-b-[2px] border-[#38BDF8]" : ""}
              >
                skills
              </a>
            </li>
            <li className='text-[#38BDF8] text-white transition-transform hover:scale-110'>
              <a
                href="#projects"
                onClick={() => setMenu("projects")}
                className={menu === "projects" ? "pb-[2px] border-b-[2px] border-[#38BDF8]" : ""}
              >
                projects
              </a>
            </li>
            <li className='text-[#38BDF8] text-white transition-transform hover:scale-110'>
              <a
                href="#contact"
                onClick={() => setMenu("contact")}
                className={menu === "contact" ? "pb-[2px] border-b-[2px] border-[#38BDF8]" : ""}
              >
                contact
              </a>
            </li>
          </ul>
        </div>

      <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none focus:text-gray-900"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 font-medium text-gray-700">
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">home</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">about</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">skills</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">projects</a></li>
            <li className="hover:scale-105 transition-transform" onClick={toggleMobileMenu}><a href="#">contact</a></li>
          </ul>
        </div>
      )}

    </header>
  );
}

export default Navbar;
