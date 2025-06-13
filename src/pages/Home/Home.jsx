import React from 'react';
import Image1 from '../../assets/Image1.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-400 mb-4">
            Hi, I'm Jaymark
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            A Frontend Developer crafting clean and interactive web experiences using modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="transition-transform hover:scale-105 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="transition-transform hover:scale-105 px-6 py-3 border border-sky-300 text-white rounded-lg hover:bg-sky-400"
            >
              Contact Me
            </a>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Image1} 
            alt="Hero illustration"
            className="w-80 md:w-[22rem] rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
