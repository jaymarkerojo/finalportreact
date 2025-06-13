import React from 'react';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    category: "Dev Tools & Others",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" }
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen container mx-auto flex flex-col items-center justify-center px-6 py-16 text-slate-100"
    >
      <div className="max-w-4xl w-full text-center space-y-12">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">Skills</h2>

        {skills.map((skillCategory, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-300">{skillCategory.category}</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {skillCategory.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2 group">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 bg-slate-800 border border-sky-500 p-2 rounded-full object-contain transition-transform hover:scale-110 hover:shadow-md hover:shadow-sky-500/40"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-sky-300 transition">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
