import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          className="w-full h-64 object-cover"
          alt="About Illustration"
        />
        <article>
          <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I have{" "}
            <span className="font-semibold">1.8+ years of experience</span>{" "}
            primarily in{" "}
            <span className="font-semibold">frontend development</span> and{" "}
            <span className="font-semibold">data science</span>. My journey in
            technology started with a strong focus on building user-centric,
            responsive applications and using data to drive meaningful insights.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Recently, I’ve started diving deeper into{" "}
            <span className="font-semibold">Machine Learning</span>, where I am
            learning to build predictive models and exploring the vast
            applications of machine learning in real-world problems. My current
            focus is on advancing my skills in{" "}
            <span className="font-semibold">React</span> for frontend
            development and expanding my knowledge in{" "}
            <span className="font-semibold">MLOps</span> to streamline machine
            learning workflows.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
