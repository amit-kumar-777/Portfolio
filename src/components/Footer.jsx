import { useState } from "react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[300px] p-6 md:p-0">
      {/* Left Block */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:px-20 mb-10 md:mb-0">
        <h4 className="mb-3 text-[#E65C4f] text-lg md:text-xl">Get In Touch</h4>
        <h1
          className="text-center md:text-left text-2xl md:text-4xl font-extrabold hover:opacity-50 transition"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          Have an idea or a concept that really excites you? Let's turn that
          idea into reality. Shoot me a message.
        </h1>
      </div>

      {/* Right Block */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 px-4 md:pl-20
          ${isActive ? "scale-105 -translate-y-1 shadow-lg" : "scale-100"} transition-transform duration-300
        `}
      >
        {/* Email Section */}
        <div className="flex items-start space-x-3">
          <MdEmail className="text-4xl md:text-5xl text-[#E65C4f]" />
          <div>
            <p className="font-semibold text-sm md:text-base">Email</p>
            <a
              href="mailto:amitkumarsuvarnkar777@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E65C4f] underline break-all text-sm md:text-base"
            >
              amitkumarsuvarnkar777@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-center space-x-3">
          <MdPhone className="text-4xl md:text-5xl text-[#E65C4f]" />
          <p className="font-semibold text-sm md:text-base">Number:</p>
          <span className="text-sm md:text-base">+91 8008726383</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-8 text-2xl md:text-3xl text-gray-600 pl-2 pt-4">
          <a
            href="https://github.com/amit-kumar-777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-black transition" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-600 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
