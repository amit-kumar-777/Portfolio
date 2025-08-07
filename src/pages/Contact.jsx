import React from "react";

function Contact() {
  return (
    <>
      {/* Title */}
      <div className="flex mt-20 justify-center text-[#E65C4f] font-bold text-4xl underline">
        Say, Hello!
      </div>

      {/* Main Container */}
      <div className="flex flex-col justify-between md:flex-row md:px-20 m-10">
        {/* Left Side */}
        <div className="w-full md:w-[40%] flex items-center justify-center p-6 rounded-lg shadow-sm ">
          <div className="text-center">
            <h2 className="text-5xl font-semibold text-white mb-3">
              Let's Talk
            </h2>
            <p className="text-gray-300 text-base mb-5">
              Have an idea or a concept that really excites you? Let's turn that
              idea into reality. Shoot me a message.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="mailto:amitkumarsuvarnkar777@gmail.com"
                rel="noopener noreferrer"
                className="border border-[#E65C4f] text-[#E65C4f] px-4 py-2 rounded hover:bg-[#E65C4f] hover:text-white transition"
              >
                Send Email
              </a>
              <a
                href="#contact-form"
                rel="noopener noreferrer"
                className="border border-[#E65C4f] text-[#E65C4f] px-4 py-2 rounded hover:bg-[#E65C4f] hover:text-white transition"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          id="contact-form"
          className="w-full md:w-[45%] bg-white p-6 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h2>
          <form className="space-y-3 text-sm">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 text-black  rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E65C4f] 
                           shadow-sm placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E65C4f] 
                           shadow-sm placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="1234567890"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E65C4f] 
                           shadow-sm placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E65C4f] 
                           shadow-sm placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 
                           focus:outline-none focus:ring-2 focus:ring-[#E65C4f] 
                           shadow-sm placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full border border-[#E65C4f] text-[#E65C4f] px-4 py-2 
                         rounded hover:bg-[#E65C4f] hover:text-white transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
