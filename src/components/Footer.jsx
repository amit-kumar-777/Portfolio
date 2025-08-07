import { useState } from "react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex flex-row h-[300px]">
      {/* Left Block */}
      <div className="h-full w-1/2 flex flex-col justify-center items-center px-20">
        <h4 className="mb-3 pr-90 text-[#E65C4f]">Get In Touch</h4>
        <h1
          className="text-center text-4xl font-extrabold hover:opacity-50"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          Have an idea or a concept that really excites you? Let's turn that
          idea into reality. Shoot me a message.
        </h1>
      </div>

      {/* Right Block */}
      <div
        className={`h-full w-1/2 flex flex-col justify-center items-start p-8 space-y-7 mt-10 pl-30
        ${isActive ? "scale-105 -translate-y-1 shadow-lg" : "scale-100"}
      `}
      >
        {/* Email Section */}
        <div className="flex items-center space-x-3">
          <MdEmail className="text-5xl text-[#E65C4f]" />
          <div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:amitkumarsuvarnkar777@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E65C4f] underline"
            >
              amitkumarsuvarnkar777@gmail.com
            </a>
          </div>
        </div>
        {/* Phone Section */}
        <div className="flex space-x-3 ">
          <MdPhone className="text-5xl text-[#E65C4f]" />
          <p className="font-semibold">Number:</p>
          <span>+91 8008726383</span>
        </div>
        {/* Icon's */}
        <div className="flex space-x-6 pl-40 text-2xl text-gray-600">
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
