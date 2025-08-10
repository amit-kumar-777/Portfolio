import { useNavigate } from "react-router-dom";
import internet from "../assets/internet.png";
import framework from "../assets/framework.png";
import database from "../assets/database-storage.png";

// Timeline Component
function Timeline({ steps }) {
  return (
    <div className="flex flex-col gap-6 w-fit">
      {steps.map((step, index, arr) => (
        <div key={index} className="flex items-start gap-4">
          {/* Dot + Line */}
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-[#E65C4f] rounded-full"></div>
            {index !== arr.length - 1 && (
              <div className="w-0.5 h-16 bg-[#E65C4f] mt-1"></div>
            )}
          </div>

          {/* Icon + Label */}
          <div className="flex items-center gap-2 transition-transform hover:scale-105">
            <img
              src={step.icon}
              alt={`${step.label} icon`}
              className="w-8 h-8"
            />
            <span className="text-base md:text-lg text-white">
              {step.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PersonalInfo() {
  const navigate = useNavigate();

  const steps = [
    { icon: internet, label: "Website Development" },
    { icon: framework, label: "Frameworks & Libraries" },
    { icon: database, label: "Databases" },
  ];

  function handleClick() {
    navigate("/about");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-[500px] px-4 md:px-12 py-8 gap-12">
      {/* Left Side: Timeline */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Timeline steps={steps} />
      </div>

      {/* Right Side: About Me */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          I'm a Front-End Developer skilled in HTML, CSS, JavaScript, React.
          Proficient in SQL & Git. Passionate about building responsive,
          user-friendly web apps. Eager to contribute and grow in a dynamic
          development environment.
        </p>

        <button
          type="button"
          aria-label="Learn more about me"
          className="self-start px-4 py-2 text-[#E65C4f] border border-[#E65C4f] rounded hover:font-bold hover:cursor-pointer transition-colors"
          onClick={handleClick}
        >
          For More <span>➔</span>
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
