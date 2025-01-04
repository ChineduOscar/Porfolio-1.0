import Logo from './Logo'
import NavbarDropdown from './NavbarDropdown'
import { BsArrowRight } from "react-icons/bs";
import { resumeLink } from '../data';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 md:px-12 md:py-6 lg:px-[90px] bg-gray-800 text-white">
      <Logo />
      <ul className="hidden md:flex items-center justify-center gap-10">
        <li className="cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer">
          <a href="#skills">Skill</a>
        </li>
        <li className="cursor-pointer">
          <a href="#experience">Experience</a>
        </li>
        <li className="cursor-pointer">
          <a href="#projects">Project</a>
        </li>
        <li className="cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
        <a href={resumeLink} target='_blank'>
          <button className="flex gap-3 items-center justify-center border-[#85d2e6] border-2 rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105">
            Resume <BsArrowRight className="text-[#85d2e6]" />
          </button>
        </a>
      </ul>
      <div className="lg:hidden block">
        <NavbarDropdown />
      </div>
    </div>
  );
};

export default Navbar;
