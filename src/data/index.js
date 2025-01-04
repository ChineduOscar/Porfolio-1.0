import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineX,
} from "react-icons/ai";
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import tailwindcss from '../assets/icons/tailwindcss.png';
import js from '../assets/icons/js.png';
import python from '../assets/icons/python.png';
import reactjs from '../assets/icons/reactjs.png';
import nextjs from '../assets/icons/nextjs.png';
import nodejs from '../assets/icons/nodejs.png';
import mongodb from '../assets/icons/mongodb.png';
import docker from '../assets/icons/docker.png';
import git from '../assets/icons/git.png';
import github from '../assets/icons/github.png';
import postman from '../assets/icons/postman.png';
import techvan from "../assets/images/techvan.png";
import portfolio from "../assets/images/portfolio.png";
import raymart from "../assets/images/raymart.png";
import amazingfacts from "../assets/images/amazingfacts.png";

export const socialMedia = [
    {
      id: "github",
      link: "https://github.com/chineduoscar",
      icon: AiFillGithub,
    },
    {
      id: "linkedin",
      link: "https://linkedin.com/in/nnadozie-chinedu-62448a19b",
      icon: AiFillLinkedin,
    },
    {
      id: "instagram",
      link: "https://instagram.com/chineduorscar",
      icon: AiFillInstagram,
    },
    {
      id: "email",
      link: "mailto:chinedunnadozieo@gmail.com",
      icon: AiOutlineMail,
    },
    {
      id: "twitter",
      link: "https://x.com/chinedudozie1",
      icon: AiOutlineX,
    },
  ];

  export const experiences = [
    {
      organisation: "Nanocodes Programming",
      positions: [
        {
          title: "Website Developer",
          duration: "Dec 2023 - May 2024",
          content: [
            "Developed and maintained web applications.",
            "Collaborated with cross-functional teams to implement new features.",
          ],
        },
      ],
    },
    {
      organisation: "DigitMoni Academy",
      positions: [
        {
          title: "Frontend Developer",
          duration: "Jan 2021 - June 2021",
          content: [
            "Developed responsive user interfaces using HTML, CSS, and JavaScript.",
            "Continuously expanding knowledge of JavaScript and its functionalities.",
          ],
        },
      ],
    },
  ];

  export const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "React", img: reactjs },
    { name: "Node.js", img: nodejs },
    { name: "MongoDB", img: mongodb },
    { name: "Git", img: git },
    { name: "Tailwind CSS", img: tailwindcss },
    { name: "Python", img: python },
    { name: "Next.js", img: nextjs },
    { name: "Docker", img: docker },
    { name: "GitHub", img: github },
    { name: "Postman", img: postman },
  ];

  export const projects = [
    {
      title: "TechVan",
      description:
        "A tech blog website built with React, CSS, Node.js, and Express. Features include admin and user dashboards.",
      image: techvan,
      liveLink: "https://techvan.netlify.app",
      githubLink: "https://github.com/Alimego/Techvan-blog",
      stacks: ["React", "Tailwind css", "Node.js", "Express.js"],
    },
    {
      title: "Raymart",
      description:
        "An e-commerce website with shopping functionality, built using React, CSS, JavaScript, and Node.js.",
      image: raymart,
      liveLink: "https://raymart.onrender.com",
      githubLink: "https://github.com/ChineduOscar/Raymart-ecommerce",
      stacks: ["React", "CSS", "JavaScript", "Node.js"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects, built with React, Tailwind CSS, and JavaScript.",
      image: portfolio,
      liveLink: "https://chineduoscar.pro",
      githubLink: "https://github.com/ChineduOscar/Porfolio-1.0",
      stacks: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Amazing Facts",
      description:
        "A fact website sharing interesting facts, built with React and CSS.",
      image: amazingfacts,
      liveLink: "https://amazingfacts.netlify.app",
      githubLink: "https://github.com/ChineduOscar/Amazing-Facts",
      stacks: ["React", "CSS"],
    },
  ];

  export const resumeLink = 'https://drive.google.com/file/d/1ugNVwpp5JLngvqekNsUo0P4nLfYMoT-D/view';