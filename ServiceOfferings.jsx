import React from 'react';
import { FaCode, FaCloud } from 'react-icons/fa'; // Import icons

function ServiceOfferings() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Web Development */}
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl text-[#4285f4] mb-4">
            <FaCode />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-[#2e3138]">
            Web Development
          </h2>
          <p className="text-lg text-[#374151] text-justify px-2">
            I create responsive and visually appealing websites tailored to your business needs.
            Specializing in HTML, CSS, JavaScript, and React.js, I build fast, user-friendly websites
            and web applications. My services include custom website design, development, and
            maintenance. I focus on seamless functionality and enhanced user experience. Let me
            help you establish a strong online presence that drives results for your business.
          </p>
        </div>

        {/* Cloud Services */}
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl text-[#4285f4] mb-4">
            <FaCloud />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-[#2e3138]">
            Cloud Services
          </h2>
          <p className="text-lg text-[#374151] text-justify px-2">
            I offer scalable cloud solutions that optimize performance, reduce costs, and enhance
            security for your business. Using platforms like AWS, Azure, and Google Cloud, I
            design and implement efficient cloud architectures. My services include cloud
            migration, resource management, and DevOps practices. I ensure seamless integration
            and provide continuous support to keep your cloud infrastructure running smoothly. Let
            me help you unlock the full potential of the cloud for your business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceOfferings;