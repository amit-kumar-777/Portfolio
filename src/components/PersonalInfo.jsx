import React from "react";
import { useNavigate } from "react-router-dom";
import internet from "../assets/internet.png";
import framework from "../assets/framework.png";
import database from "../assets/database-storage.png";

function PersonalInfo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-[500px] overflow-hidden p-8 gap-8">
      {/* Left side */}
      <div className="w-1/2 relative">
        {/* Vertical Line 1 details */}
        <span className="absolute top-25 left-40 w-[2px] h-16 bg-[#E65C4f]"></span>
        <img
          src={internet}
          alt=""
          className="absolute w-10 h-10 top-30 left-44  "
        />
        <span className="absolute top-32 left-58">Website Development</span>
        {/* Dot 1 */}
        <span className="absolute top-[170px] left-[157px] w-2 h-2 rounded-full bg-[#E65C4f]"></span>
        {/* Vertical Line 2 details */}
        <span className="absolute top-[182px] left-40 w-[2px] h-16 bg-[#E65C4f]"></span>
        <img
          src={framework}
          alt=""
          className="absolute w-10 h-10 top-50 left-44  "
        />
        <span className="absolute top-52 left-58">Frameworks & Libraries</span>
        {/* Dot 2 */}
        <span className="absolute top-[252px] left-[157px] w-2 h-2 rounded-full bg-[#E65C4f]"></span>
        {/* Vertical Line 3 details */}
        <span className="absolute top-[265px] left-40 w-[2px] h-16 bg-[#E65C4f]"></span>
        <img
          src={database}
          alt=""
          className="absolute w-10 h-10 top-70 left-44  "
        />
        <span className="absolute top-72 left-58">Databases</span>
      </div>

      {/* Right side */}
      <div className="border-green-300 w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>

        <p className="leading-relaxed text-lg">
          I'm a Front-End Developer skilled in HTML, CSS, JavaScript, React.
          Proficient in SQL & Git. Passionate about building responsive,
          user-friendly web apps. Eager to contribute and grow in a dynamic
          development environment.
        </p>

        <button
          type="button"
          className="self-start p-2 text-[#E65C4f] hover:font-bold hover:cursor-pointer border border-[#E65C4f] rounded"
          onClick={handleClick}
        >
          For More <span>➔</span>
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
