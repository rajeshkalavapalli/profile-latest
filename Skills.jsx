import React from 'react';

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React, Node.js</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>UI/UX Design</h3>
            <p>Figma, Adobe XD, Wireframing</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>Database</h3>
            <p>MySQL, MongoDB</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>Version Control</h3>
            <p>Git, GitHub</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>Cloud Services</h3>
            <p>AWS, Azure</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>Testing</h3>
            <p>Jest, Cypress</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;