import React from 'react';
import Image1 from '../../assets/Image1.jpg';
import './Home.css'

const Home = () => {
  return (
    <section
      id="home"
      className="bg-slate-900 min-h-screen flex items-center justify-center px-6 md:px-16 bg-black text-slate-100"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-400 animate-fade-in-up">
            Hi, I'm Jaymark
          </h1>
          <p className="text-lg text-slate-300">
            A Frontend Developer crafting clean and interactive web experiences using modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="transition-all hover:scale-105 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-400 shadow-md"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="transition-all hover:scale-105 px-6 py-3 border border-sky-300 text-white rounded-lg hover:bg-sky-400 hover:text-white shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Image1}
            alt="Jaymark Profile"
            className="w-72 md:w-80 rounded-full shadow-2xl border-4 border-sky-500 object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;