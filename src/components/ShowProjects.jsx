import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ShowProjects({ company, duration, position, description }) {
  const navigation = useNavigate();

  function handleClick() {
    navigation("/projects");
  }

  const location = useLocation();

  const isOnProjectsPage = location.pathname === "/projects";

  return (
    <>
      <div className="w-full md:w-1/2 p-6 ">
        <div className="border p-3 py-6 h-full rounded-2xl transform transition-transform duration-300 hover:scale-102 hover:shadow-xl">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-[#FF5733]">
            {company}
          </h2>
          <h3 className="text-lg font-semibold  mt-1 tracking-wide">
            {position}
          </h3>
          <p className="text-sm  mt-1 mb-4 tracking-wide">{duration}</p>
          <p className="text-base  leading-relaxed tracking-wide">
            {description}
          </p>
          {!isOnProjectsPage && (
            <button
              type="button"
              className="self-start  mt-4 p-2 text-[#E65C4f] hover:font-bold hover:cursor-pointer border border-[#E65C4f] rounded"
              onClick={handleClick}
            >
              For More <span>➔</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ShowProjects;
