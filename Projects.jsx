import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-[#fefefe] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-[#af1740] text-center md:text-left">
          My <span className="text-[#117554]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">E-commerce Website</h3>
            <p className="text-lg text-[#3c3d37]">
              Developed a fully functional e-commerce platform using React and Node.js with a MongoDB database.
            </p>
          </div>
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">Portfolio Website</h3>
            <p className="text-lg text-[#3c3d37]">
              Created a personal portfolio website to showcase my skills and projects using React and Tailwind CSS.
            </p>
          </div>
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">project Management App</h3>
            <p className="text-lg text-[#3c3d37]">
              Built a task management application with real-time updates using React and Firebase.
            </p>
          </div>
          
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">Weather App</h3>
            <p className="text-lg text-[#3c3d37]">
              Created a weather application using React and a third-party weather API.
            </p>
          </div>
          <div className="bg-[#f5f7f8] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#522258]">Data Visualization Dashboard</h3>
            <p className="text-lg text-[#3c3d37]">
              Developed a dashboard to visualize data from a database using React and Chart.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;