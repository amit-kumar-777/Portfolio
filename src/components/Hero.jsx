import React from "react";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row h-[80vh] px-6 md:px-16 py-10 items-center relative overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:pt-16 md:pl-16">
        <h1 className="text-4xl md:text-5xl font-semibold flex items-center">
          Greetings...
          {/* <span className="ml-1 mt-7 bottom-[0px] w-3 h-3 bg-[#E65C4f] rounded-full inline-block"></span> */}
        </h1>

        <div className="relative mt-2">
          <span className="mb-2 absolute -left-30 bottom-[0px] w-30 h-1 bg-[#E65C4f] rounded-full"></span>
          <h2 className="text-3xl md:text-4xl font-mono text-[#E65C4f]">
            I'm Amit Kumar
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold">Software Developer</h3>

        <div className="flex gap-4 mt-6 flex-wrap">
          <button
            type="button"
            className="border-2 border-[#E65C4f] bg-[#E65C4f] px-6 py-3 rounded hover:bg-transparent hover:text-[#E65C4f] transition"
          >
            Got a project?
          </button>
          <a
            href="/AmitKumarSuvarnkarResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#E65C4f] text-[#E65C4f] px-6 py-3 rounded hover:bg-[#E65C4f] hover:text-white transition"
          >
            My resume
          </a>
        </div>
      </div>

      {/* Right Side - Decorative Nested Circles */}
      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
        <div className="relative w-[24rem] h-[24rem] md:w-[28rem] md:h-[28rem] translate-y-24 overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-[#E65C4f] flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full bg-gray-800 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-[#E65C4f] flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="w-[60%] h-[60%] rounded-full bg-[#E65C4f]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
