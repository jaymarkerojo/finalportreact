import React from 'react';
import { FaFacebookF, FaGithub, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="animate-fade-in-up duration-700 bg-slate-900 min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-black text-slate-100"
    >
      <div className="max-w-2xl text-center space-y-6">
        <h2 className="text-4xl font-bold text-sky-400">Contact Me</h2>
        <p className="text-lg text-slate-300">
          Whether it's a collaboration, a question, or just a hello — feel free to reach out!
        </p>

        <div className="flex justify-center gap-10 text-3xl mt-8">
          <a
            href="mailto:jaymarspogs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-full p-2"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.facebook.com/jaymark.634913"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.tiktok.com/@jaymvnkk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full p-2"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="https://github.com/jaymarkerojo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-2"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        
        <div className="mt-12 bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <h3 className="text-2xl text-sky-400 mb-6">Send Me a Message</h3>
          <form action="https://formspree.io/f/xqabqnak" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-slate-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-slate-700 text-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-slate-700 text-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-3 bg-slate-700 text-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
