import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col items-center justify-center min-h-screen px-6 py-16 text-slate-100"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-slate-300">
          Hi! I'm <span className="text-sky-400 font-semibold">Jaymark</span>, a Frontend Developer based in <span className="italic">Cebu City</span>. I specialize in crafting clean, responsive, and interactive websites using modern web technologies like <span className="text-sky-300">HTML</span>, <span className="text-sky-300">CSS</span>, <span className="text-sky-300">JavaScript</span>, and <span className="text-sky-300">React</span>.
        </p>

        <p className="text-lg leading-relaxed text-slate-400">
          My coding journey began with a curiosity about how websites work. Since then, I’ve built a range of personal and academic projects, growing both technically and creatively along the way.
        </p>

        <p className="text-lg leading-relaxed text-slate-400">
          I thrive on learning new tools, staying current with frontend trends, and working with people who are just as passionate about building beautiful user experiences. When I’m not coding, you can find me gaming, exploring music, or geeking out over new tech.
        </p>
      </div>
    </section>
  );
};

export default About;
