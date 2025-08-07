import React from "react";
import Amit from "../assets/Amit.jpeg";

function Hero() {
  return (
    <>
      <div className="flex min-h-[500px] overflow-hidden">
        {/* Left side */}
        <div className="flex relative w-1/2">
          <div className="absolute text-4xl top-[160px] left-[100px] font-semibold	">
            Hello
            <span className="bg-[#E65C4f] inline-block rounded-full w-2 h-2 ml-1"></span>
          </div>

          <span className="bg-[#E65C4f] absolute inline-block rounded-full w-[120px] h-[4px] top-[260px]"></span>
          <span className="absolute text-4xl top-[232px] left-[128px] font-mono">
            I'm Amit Kumar
          </span>

          <span className="absolute top-[300px] left-[100px] text-4xl font-bold">
            Software Developer
          </span>

          <button
            type="button"
            className="absolute border-2 top-[380px] border-[#E65C4f] bg-[#E65C4f] px-4 py-2 left-[100px] rounded cursor-pointer hover:bg-transparent hover:text-orange-600"
          >
            Got a project?
          </button>
          <button
            type="button"
            className="absolute border-2 top-[380px] left-[250px] border-[#E65C4f] text-[#E65C4f]  px-3 py-2 rounded cursor-pointer hover:bg-[#E65C4f] hover:text-white"
          >
            <a
              href="/AmitKumarSuvarnkarResume.pdf"
              // download="AmitKumarSuvarnkarResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My resume
            </a>
          </button>
        </div>

        {/* Right side */}
        <div className="relative flex w-1/2">
          <div className="absolute w-120 h-120 inline-block rounded-full bg-[#E65C4f] top-25 left-15">
            <div className="absolute w-105 h-105 inline-flex rounded-full bg-gray-800 top-8 left-7.5">

              <div className="absolute w-80 h-80 inline-flex rounded-full bg-[#E65C4f] top-12 left-12">
                <div className="absolute w-60 h-60 inline-flex rounded-full bg-gray-800 top-10 left-10">
                  <div className="absolute w-40 h-40 inline-flex rounded-full bg-[#E65C4f] top-10 left-10">
                    {/* <img src={} alt="GoJo"/> */}
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
