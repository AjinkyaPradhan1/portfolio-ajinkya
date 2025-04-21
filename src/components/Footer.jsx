import React from "react";
import { logo2 } from "../assets";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-8 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left: Name */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img src={logo2} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-lg font-semibold">
            Ajinkya Pradhan
            {/* <span className="hidden sm:inline">Pradhan</span> */}
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-gray-400 text-sm order-3 md:order-none md:flex-1 text-center">
          &copy; {new Date().getFullYear()} Ajinkya Pradhan. All rights reserved.
        </div>

        {/* Right: Social Icons + Resume */}
        <div className="flex flex-col md:flex-row items-center gap-4 order-2">
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
          <a
            href="/resume/Resume_AjinkyaPradhan.pdf"
            download
            className="flex items-center gap-2 hover:text-white transition-colors duration-300 text-sm"
            title="Download Resume"
          >
            <FaDownload className="text-xl" />
            <span className="underline">Download Resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
