import React from "react";

function SkillsBar() {
  return (
    <div className="w-full bg-gray-700 text-gray-400 px-6 py-4 shadow-md">
      <ul className="flex flex-wrap justify-around gap-6">
        <li className="hover:text-white cursor-pointer">HTML5</li>
        <li className="hover:text-white cursor-pointer">CSS</li>
        <li className="hover:text-white cursor-pointer">JavaScript</li>
        <li className="hover:text-white cursor-pointer">Tailwind</li>
        <li className="hover:text-white cursor-pointer">React JS</li>
        <li className="hover:text-white cursor-pointer">SQL Plus</li>
        <li className="hover:text-white cursor-pointer">Git</li>
      </ul>
    </div>
  );
}


export default SkillsBar;
