import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I'm a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies. I build high-performance web applications with a focus on clean UI/UX.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center space-x-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="px-4 py-2 bg-blue-600 rounded-lg text-white">React</span>
          <span className="px-4 py-2 bg-green-600 rounded-lg text-white">Node.js</span>
          <span className="px-4 py-2 bg-yellow-500 rounded-lg text-white">JavaScript</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
