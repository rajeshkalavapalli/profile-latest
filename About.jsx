import React from 'react';
import aboutImage from '../assets/images/1.jpg';  

function About() {
  return (
    <section id="about" className="bg-[#fefefe] py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-6 text-[#af1740]">About Me</h1>
          <p className="text-lg mb-8 leading-relaxed text-[#3c3d37]">
            "Hello! I’m <b className="text-[#6a9c89]">Rajesh.K</b>, a dedicated and innovative developer specializing in frontend technologies and DevOps. With a strong foundation in <b className="text-[#6a9c89]">HTML, CSS, JavaScript, and React,</b> I build intuitive, user-friendly interfaces that balance aesthetics with performance. My background in DevOps, encompassing tools like <b className="text-[#6a9c89]">Docker, Kubernetes, and Jenkins</b>, allows me to manage seamless deployments and ensure stability in complex applications. Passionate about continuous learning, I thrive on staying updated with the latest industry trends and best practices. My approach combines creativity with technical rigor, and I aim to deliver solutions that not only meet but exceed expectations."
          </p>
          <h1 className="text-3xl font-bold mb-6 text-[#ff9a00] crafting">
            Crafting Digital Experiences: Web Design & Development Expert
          </h1>
          <p className="text-lg leading-relaxed text-[#3c3d37]">
            From turning creative ideas into stunning websites to building seamless, user-friendly web applications, I specialize in delivering dynamic, visually engaging, and high-performance digital solutions. Let’s work together to bring your vision to life with a website that stands out!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 p-4">
          <img
            src={aboutImage}
            alt="About Me"
            className="max-w-full h-auto rounded-lg shadow-lg zoom-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
