import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl mb-4">Full Stack Developer!</h3>
            <p className="text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatum, placeat nesciunt ea maiores, accusantium rem, vitae voluptas reprehenderit doloremque eum. Itaque, tempora. Atque, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi illo ratione doloribus, nihil quisquam. Commodi alias magni, sed ipsam, voluptatum harum ea illum quidem saepe deserunt. Quod, architecto.
            </p>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
              Read More
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
            {/* Add Image Here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
