import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroImg from "../assets/images/heroImg2.png";
import { socialMedia } from "../data";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between px-6 py-12 md:px-16 md:py-20 lg:px-[90px] text-white">
      {/* Text Section */}
      <div className="flex flex-col items-start justify-center gap-6 md:gap-8 text-start">
        <p className="text-2xl md:text-3xl font-medium">Hi,</p>
        <p className="leading-tight text-3xl md:text-6xl font-semibold">
          I&apos;m <span className="text-[#85d2e6]">Chinedu Nnadozie Oscar</span>
        </p>
        <p className="text-lg md:text-3xl text-gray-400">Fullstack Web Developer</p>
        <a href="#contact">
          <button className="flex gap-3 items-center justify-center border-[#85d2e6] border-2 rounded-xl px-6 py-3 text-lg md:text-xl transition-transform duration-300 hover:scale-105">
            Let&apos;s Connect <BsArrowRight className="text-[#85d2e6]" />
          </button>
        </a>
        <div className="flex justify-start">
          {socialMedia.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.id}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img 
          src={heroImg} 
          alt="Hero section illustration" 
          className="w-[300px] h-[300px] md:w-[400px] md:h-[450px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
