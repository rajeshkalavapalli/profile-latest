import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Rajesh</h1>
      <p className="text-lg text-gray-400 mb-6">A passionate Full Stack Developer</p>
      <div className="flex gap-4">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="bg-blue-500 px-6 py-3 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          View My Work
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="border border-blue-500 px-6 py-3 text-white rounded-lg hover:bg-blue-500 cursor-pointer"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;

