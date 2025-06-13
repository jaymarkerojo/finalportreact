import React from 'react';

const projects = [
  {
    name: "SAMPLE PROJECT 1",
    description: "A full-stack app with React front-end and Node.js backend for managing tasks efficiently.",
    link: "https://github.com/yourusername/project-alpha"
  },
  {
    name: "SAMPLE PROJECT 2",
    description: "Responsive e-commerce website built with React and integrated with payment gateway APIs.",
    link: "https://your-ecommerce-demo.netlify.app"
  },
  {
    name: "SAMPLE PROJECT 3",
    description: "This portfolio website built using React and Tailwind CSS showcasing my work.",
    link: "https://github.com/yourusername/portfolio"
  }
];

const Project = () => {
  return (
    <section
      className="container min-h-screen mx-auto flex flex-col items-center justify-center py-16 px-6 text-slate-100"
      id="projects"
    >
      <h2 className="text-sky-400 text-4xl font-bold mb-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map(({ name, description, link }) => (
          <div
            key={name}
            className="bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-sky-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-sky-300 mb-2">{name}</h3>
            <p className="text-slate-300 mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
