import { links } from "../Data";

const Navbar = () => {
  return (
    <nav className="bg-indigo-200">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Left-aligned Title */}
        <h2 className="text-3xl font-bold sm:text-left">
          <span className="block text-indigo-600">Srinivas</span>
          <span className="block text-cyan-400">TechHub</span>
        </h2>

        {/* Centered Navigation Links */}
        <div className="flex justify-center mt-4 sm:mt-0 gap-x-8">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg font-bold tracking-wide hover:text-indigo-600 duration-300 relative group"
              >
                {text}
                <span className="block h-1 bg-indigo-600 scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
