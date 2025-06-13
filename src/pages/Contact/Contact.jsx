import React from 'react';
import { FaFacebookF, FaGithub, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-slate-100"
    >
      <div className="max-w-2xl text-center space-y-6">
        <h2 className="text-4xl font-bold text-sky-400">Contact Me</h2>

        <p className="text-lg text-slate-300">
          Whether it's a collaboration, question, or just to say hi — feel free to reach out!
        </p>

        <div className="flex justify-center gap-8 text-3xl mt-6">
          <a
            href="mailto:jaymarspogs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/jaymark.634913"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com/@jaymvnkk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaTiktok />
          </a>
          <a
            href="https://github.com/jaymarkerojo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
