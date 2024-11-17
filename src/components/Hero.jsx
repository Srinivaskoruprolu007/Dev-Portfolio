import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa6";
import heroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-indigo-200 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        {/* Left side: Text */}
        <article>
          <h1 className="text-5xl sm:text-7xl font-bold text-indigo-800 tracking-wide leading-tight">
            I&apos;m Srinivas
          </h1>
          <p className="mt-4 text-xl sm:text-3xl text-gray-800 tracking-wide">
            Front-End Developer And Data Scientist
          </p>
          <p className="mt-2 text-md sm:text-lg text-gray-700 tracking-wide">
            I&apos;m a passionate developer with a strong background in front-end development and data science.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6">
            <a href="https://github.com/Srinivaskoruprolu007" aria-label="GitHub">
              <FaGithubSquare className="h-8 w-8 text-gray-600 hover:text-indigo-600 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/srinivas-koruprolu/" aria-label="LinkedIn">
              <FaLinkedinIn className="h-8 w-8 text-gray-600 hover:text-indigo-600 transition duration-300" />
            </a>
            <a href="https://www.kaggle.com/srinivaskoruprolu" aria-label="Kaggle">
              <FaKaggle className="h-8 w-8 text-gray-600 hover:text-indigo-600 transition duration-300" />
            </a>
          </div>

          {/* CV Button Section */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/edit?usp=sharing&ouid=103175391586875038607&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Open My CV
            </a>
            <a
              href="https://docs.google.com/document/d/1bfuztmRBf2ui-MKKQLHYhWwsxROIPbnE/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Download My CV
            </a>
          </div>
        </article>

        {/* Right side: Hero Image */}
        <article className="hidden md:block">
          <img src={heroImage} alt="Hero" className="h-80 lg:h-96 rounded-xl shadow-lg" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
