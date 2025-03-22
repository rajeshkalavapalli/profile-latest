import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and TailwindCSS.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    title: "E-Commerce Store",
    description: "A full-stack e-commerce application using React, Node.js, and MongoDB.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A blog website with authentication and CMS features built with Next.js.",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
