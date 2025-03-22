import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3>Project 3</h3>
            <p>Description of Project 3.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3>Project 4</h3>
            <p>Description of Project 4.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3>Project 5</h3>
            <p>Description of Project 5.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3>Project 6</h3>
            <p>Description of Project 6.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;