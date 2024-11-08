import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaRobot, FaChartLine } from "react-icons/fa";
import { SiPython } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "Home" },
  { id: nanoid(), href: "#skills", text: "Skills" },
  { id: nanoid(), href: "#about", text: "About" },
  { id: nanoid(), href: "#projects", text: "Projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-cyan-500" />,
    text: "Highly skilled in HTML & CSS, adept at crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-cyan-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Machine Learning",
    icon: <FaRobot className="h-16 w-16 text-cyan-500" />,
    text: "Proficient in Machine Learning, building predictive models using supervised and unsupervised learning techniques with Python.",
  },
  {
    id: nanoid(),
    title: "Data Science",
    icon: <FaChartLine className="h-16 w-16 text-cyan-500" />,
    text: "Experienced in data analysis, data visualization, and data-driven decision-making with a strong foundation in statistical methods.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <SiPython className="h-16 w-16 text-cyan-500" />,
    text: "Skilled in Python for data analysis, machine learning, and automation, leveraging libraries like Pandas, NumPy, and scikit-learn.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "First Project",
    text: "A comprehensive project showcasing skills in React and front-end development, focusing on user-friendly design and responsive layout.",
  },
  // Data Science Project 1
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://datascience-project1.netlify.app/",
    github: "https://github.com/your-username/datascience-project1",
    title: "Data Science Project 1",
    text: "An in-depth data analysis project focused on predictive modeling and feature engineering using Python and scikit-learn.",
  },
  // Data Science Project 2
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/5863311/pexels-photo-5863311.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://datascience-project2.netlify.app/",
    github: "https://github.com/your-username/datascience-project2",
    title: "Data Science Project 2",
    text: "A machine learning project using NLP techniques to analyze and categorize large sets of textual data for sentiment analysis.",
  },
  // Additional Projects as needed
];
