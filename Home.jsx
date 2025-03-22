import React from 'react';

function Home() {
  return (
    <section id="home" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <div className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Rajesh Kalavapalli</div>
        <div className="text-xl md:text-2xl mb-8">Full Stack Developer</div>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
            My Projects
          </a>
          <a href="#contact" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;