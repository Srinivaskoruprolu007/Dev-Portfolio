import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa6";
import heroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="bg-indigo-200 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wide">
            I&apos;m Srinivas
          </h1>
          <p className="mt-4 text-3xl text-slate-800 capitalize tracking-wide">
            Front-End Developer And Data Scientist
          </p>
          <p className="mt-2 text-lg text-slate-800 capitalize tracking-wide">
            I&apos;m a passionate developer with a strong background in
            front-end development and data science.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Srinivaskoruprolu007">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/srinivas-koruprolu/">
              <FaLinkedinIn className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.kaggle.com/srinivaskoruprolu">
              <FaKaggle className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
          <div className="mt-8">
            <a 
              href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/edit?usp=sharing&ouid=103175391586875038607&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 duration-300"
            >
              Open My CV
            </a>
            <a
              href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 duration-300"
            >
              Download My CV
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImage} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
