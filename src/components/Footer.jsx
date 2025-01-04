import React from "react";
import { BsArrowRight, BsTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import profilePic from "../assets/images/profilePic.png";
import { socialMedia, resumeLink } from "../data";

const Footer = () => {
  return (
    <footer className="px-4 py-2 md:px-12 md:py-6 lg:px-[90px] bg-gray-800 text-white">
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-6 justify-between">
        <div className="text-left">
          <h2 className="text-xl font-semibold text-white font-poppins">
            Chinedu Nnadozie Oscar
          </h2>
          <h3 className="font-semibold text-gray-400 font-poppins my-2 md:my-4">
            Fullstack Website Developer
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BsTelephoneFill className="text-teal-200 text-xl" />
              <span>+234 812 255 1232</span>
            </div>
            <div className="flex items-center gap-3">
              <BsWhatsapp className="text-green-500 text-xl" />
              <span>+234 812 255 1232</span>
            </div>
          </div>

          <div className="flex justify-start my-4 md:my-8">
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

          <a href={resumeLink} target='_blank'>
            <button className="flex gap-3 items-center justify-center border-[#85d2e6] border-2 rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105">
              Resume <BsArrowRight className="text-[#85d2e6]" />
            </button>
          </a>
        </div>

        <div className="mt-10 md:mt-0">
          <LazyLoadImage
            src={profilePic}
            alt="Chinedu Oscar"
            effect="blur"
            className="w-[200px] h-[200px] border-2 border-[#77a8b4] relative z-[5] rounded-full"
          />
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-center text-gray-400 mt-6">
        © {new Date().getFullYear()} Oscar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
