import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 outline-none"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded text-white font-bold">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6 text-2xl">
          <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-500">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-400 hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourgithub" className="text-blue-400 hover:text-blue-500">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
