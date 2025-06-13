import React from 'react';

const projects = [
  {
    name: "Portfolio Website",
    description: "A responsive portfolio built with React and Tailwind CSS to showcase my projects and skills.",
    image: "/images/portfolio.png",
    url: "https://your-portfolio-link.com"
  },
  {
    name: "Weather App",
    description: "A simple weather application using OpenWeatherMap API, built with React and styled-components.",
    image: "/images/weather-app.png",
    url: "https://your-weatherapp-link.com"
  },
  {
    name: "Task Tracker",
    description: "A basic task management app built using React with local storage support.",
    image: "/images/task-tracker.png",
    url: "https://your-tasktracker-link.com"
  },
    {
    name: "Portfolio Website",
    description: "A responsive portfolio built with React and Tailwind CSS to showcase my projects and skills.",
    image: "/images/portfolio.png",
    url: "https://your-portfolio-link.com"
  },
  {
    name: "Weather App",
    description: "A simple weather application using OpenWeatherMap API, built with React and styled-components.",
    image: "/images/weather-app.png",
    url: "https://your-weatherapp-link.com"
  },
  {
    name: "Task Tracker",
    description: "A basic task management app built using React with local storage support.",
    image: "/images/task-tracker.png",
    url: "https://your-tasktracker-link.com"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 min-h-screen container mx-auto flex flex-col items-center justify-center px-6 py-16 text-slate-100"
    >
      <div className="max-w-5xl w-full text-center space-y-12">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-sky-500 rounded-xl p-4 hover:shadow-lg hover:shadow-sky-400/40 transition-all"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
              <p className="text-sm text-slate-400 mt-2">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
