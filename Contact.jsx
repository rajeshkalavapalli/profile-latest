import React from 'react';
import contactImage from '../assets/images/con1.svg';

function ContactUs() {
  return (
    <section id="contact" className="bg-white py-16"> {/* Add id="contact" here */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Image */}
        <div className="flex items-center justify-center">
          <img
            src={contactImage}
            alt="Contact Us"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-[#af1740] mb-8">
            CONTACT US
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-[#2e3138] mb-2">
                My Address
              </h3>
              <p className="text-sm text-[#374151]">
                24/36, Ambedkar nagar, venkatagiri, Nellore(dt),
                Andhra pradesh-524132
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2e3138] mb-2">
                Email Id
              </h3>
              <p className="text-sm text-[#374151]">
                rajesh.aws1616@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2e3138] mb-2">
                Phone Number
              </h3>
              <p className="text-sm text-[#374151]">
                +91-9866667073
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Create your message"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-[#522258] text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;