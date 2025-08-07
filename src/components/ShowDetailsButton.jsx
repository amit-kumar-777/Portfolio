import React, { useState } from "react";

function ShowDetailsButton() {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="text-white px-6 py-12 w-full max-w-2xl mx-auto rounded-2xl flex flex-col space-y-4 p-6 mr-7">
      {/* Reusable section component */}
      {[
        {
          key: "skills",
          title: "Skills",
          content: (
            <>
              <p>
                Skilled in web development with hands-on experience in Redux.
                Collaborated on multiple team projects and worked with SQL*Plus
                and Excel for data handling and reporting.
              </p>
            </>
          ),
        },
        {
          key: "frontend development",
          title: "Frontend Development",
          content: (
            <p>
              Skilled in building responsive and modern UIs using HTML, CSS, and
              Tailwind CSS. Experienced in dynamic front-end development with
              JavaScript and React
            </p>
          ),
        },
        {
          key: "ui research",
          title: "UI Research",
          content: <p>Good Knowledge on UI/UX design.</p>,
        },
        {
          key: "api integration & development",
          title: "API Integration & Development",
          content: (
            <p>
              I have experience integrating third-party APIs as well as
              developing custom RESTful APIs to enhance application
              functionality and provide dynamic data processing.
            </p>
          ),
        },
      ].map(({ key, title, content }, index) => (
        <div key={key} className="border-b border-gray-800 py-4 ">
          <button
            className="flex justify-between items-center w-full text-left shadow-md hover:shadow-lg transition-shadow duration-300 px-4 py-2 rounded-md bg-gray-900 cursor-pointer"
            onClick={() => handleToggle(key)}
          >
            <span className="flex items-center gap-2 text-xl font-semibold">
              <span className="text-orange-500 font-bold">
                {String(index + 1).padStart(2, "0")}.
              </span>{" "}
              {title}
            </span>
            <span>{activeSection === key ? "▴" : "▾"}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === key
                ? "max-h-40 opacity-100 mt-4"
                : "max-h-0 opacity-0"
            } pl-7 text-gray-300 space-y-2`}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowDetailsButton;
