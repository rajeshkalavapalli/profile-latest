import React, { useRef, useEffect } from 'react';
import { Typed } from 'react-typed';
import profileImage from '../assets/images/home.png';
import { Link } from 'react-scroll'; // Import Link

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: [
          'A Developer...',
          'I Love Design....',
          'A Web Designer...',
          'I Love to Deploy....',
        ],
        typeSpeed: 200,
        backSpeed: 80,
        loop: true,
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="bg-[#EAFAEA]  text-blue-950 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left p-4">
          <div className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Rajesh Kalavapalli
          </div>
          <span ref={typedRef} className="text-xl md:text-2xl mb-8 text-[#9BCF53]" />
          <p className="text-xl text-[#16404D] mb-8 animate-colorChange">
            Passionate Developer & DevOps Enthusiast | Creating Scalable Web Solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-[#522258] hover:bg-[#6a3070] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            >
              My Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-[#522258] hover:bg-[#6a3070] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 p-4">
          <img
            src={profileImage}
            alt="Rajesh.K"
            className="rounded-full w-96 h-80 object-fill"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;