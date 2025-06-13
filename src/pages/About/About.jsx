import React from 'react';
import Pic2 from '../../assets/Pic2.jpg';

const about = [
  {
    items: [
      {
        name: "Bio",
        description: "Dedicated Front-End Developer committed to building beautiful, functional, and accessible websites. I thrive on bringing ideas to the screen with clean code and a user-first approach."
      },
      {
        name: "Hobbies",
        description: "Beyond the browser, my interests include gaming, and discovering new music. These creative outlets keep my mind sharp and inspired."
      },
      {
        name: "Languages",
        description: "I am fluent in English, Tagalog, and Bisaya."
      },
      {
        name: "Location",
        description: "Cebu City, Central Visayas, Philippines."
      },
      {
        name: "Skills",
        description: "Proficient in React, JavaScript, HTML, CSS, and TailwindCSS."
      },
      {
        name: "Education",
        description: "3rd year Bachelor's degree in Information Technology from the University of Cebu."
      },
      {
        name: "Projects",
        description: "Contributed to multiple open-source projects and built several personal apps."
      },
      {
        name: "Contact",
        description: "Reach out via email at jaymarspogs@gmail.com."
      }
    ]
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen container mx-auto flex flex-col items-center justify-center px-6 py-16">

      <div className="max-w-5xl w-full text-center space-y-12 mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
          About <span className="text-white">Me</span>
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">


      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {about[0].items.map((item, index) => (
          <div key={index} className="bg-slate-800 p-6 border-2 border-sky-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-sky-400 mb-2">{item.name}</h3>
            <p className="text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
