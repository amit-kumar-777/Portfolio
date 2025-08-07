import React from "react";

function SkillsBar() {
  return (
    <div className="flex items-center shadow-md bg-gray-700 text-gray-400 px-18 py-4 gap-8">
      <ul className="flex gap-35 list-none">
        <li className="hover:text-white cursor-pointer">HTML5</li>
        <li className="hover:text-white cursor-pointer">CSS</li>
        <li className="hover:text-white cursor-pointer">JavaScript</li>
        <li className="hover:text-white cursor-pointer">Tailwind</li>
        <li className="hover:text-white cursor-pointer">React js</li>
        <li className="hover:text-white cursor-pointer">SQL Plus</li>
        <li className="hover:text-white cursor-pointer">Git</li>
      </ul>
    </div>
  );
}

export default SkillsBar;
