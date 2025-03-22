import React from 'react';

function Skills() {
  return (
    <section id="skills" className="bg-[#fefefe] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-[#af1740] text-center md:text-left">
          My <span className="text-[#117554]">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">Web Development</h3>
            <p className="text-lg text-[#3c3d37]">HTML, CSS, JavaScript, React, Node.js</p>
          </div>
    
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">DevOps</h3>
            <p className="text-lg text-[#3c3d37]">Docker, Kubernaties, terraform, ansible, jenkins</p>
          </div>
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">Version Control</h3>
            <p className="text-lg text-[#3c3d37]">Git, GitHub</p>
          </div>
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">Cloud Services</h3>
            <p className="text-lg text-[#3c3d37]">AWS,vpc, route53,ec2,</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Skills;