import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <h1 className="text-4xl sm:text-6xl font-bold">Hi, I'm Rajesh</h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-300">Full Stack Developer | React & Node.js</p>

      <div className="mt-6 flex space-x-4">
        <Link
          to="projects"
          smooth={true}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md cursor-pointer"
        >
          View Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md cursor-pointer"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
