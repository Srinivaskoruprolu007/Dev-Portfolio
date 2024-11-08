import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import netflixImg from "../src/assets/netflix.jpeg";
import { FaDatabase } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiSitecore } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "Home" },
  { id: nanoid(), href: "#about", text: "About" },
  { id: nanoid(), href: "#skills", text: "Skills" },
  { id: nanoid(), href: "#projects", text: "Projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adept at crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Strong foundation in Python, utilizing it for data science, machine learning, and automation projects.",
  },
  {
    id: nanoid(),
    title: "SQL",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />, // SQL icon
    text: "Proficient in SQL, designing and querying databases to manage and extract valuable insights from data.",
  },
  {
    id: nanoid(),
    title: ".NET",
    icon: <DiDotnet className="h-16 w-16 text-emerald-500" />, // .NET icon
    text: "Experience with .NET framework for building scalable and high-performance web applications.",
  },
  {
    id: nanoid(),
    title: "SiteCore",
    icon: <SiSitecore className="h-16 w-16 text-emerald-500" />, // SiteCore (Microsoft icon)
    text: "Knowledge in SiteCore CMS for creating dynamic, personalized, and scalable web solutions.",
  },
  {
    id: nanoid(),
    title: "Excel",
    icon: <SiMicrosoftexcel className="h-16 w-16 text-emerald-500" />, // Excel (Microsoft icon)
    text: "Proficient in Excel for data analysis, manipulation, and visualization.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with appropriate image for the quiz app
    url: "https://quiz-api-five-blush.vercel.app/",
    github: "https://github.com/Srinivaskoruprolu007/quiz-api",
    title: "Quiz App with API",
    text: "A minimal UI quiz application that fetches questions from an API and presents them in an interactive format for users. This app is built using React and focuses on simplicity and functionality.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with appropriate image for task manager
    url: "https://task-manager-kappa-eight.vercel.app/",
    github: "https://github.com/Srinivaskoruprolu007/task-manager",
    title: "Task Manager with Dark Mode",
    text: "A task management application built using React and Tailwind CSS, set up with Vite. This app includes features like dark mode, task organization, and a modern, clean user interface.",
  },
  {
    id: nanoid(),
    img: netflixImg, // Placeholder image for Netflix EDA
    url: "https://github.com/Srinivaskoruprolu007/Netflix-EDA/blob/master/Netflix_Detailed.ipynb",
    github: "https://github.com/Srinivaskoruprolu007/Netflix-EDA",
    title: "Netflix EDA - Data Analysis",
    text: "This project focuses on exploratory data analysis (EDA) of Netflix data, uncovering trends and insights from a detailed dataset. It covers data cleaning, visualization, and identifying key patterns.",
  },
];
