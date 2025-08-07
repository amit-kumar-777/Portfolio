import React from "react";
import SkillsBar from "../components/SkillsBar";
import PersonalInfo from "../components/PersonalInfo";
import ShowProjects from "../components/ShowProjects";
import Hero from "../components/Hero";
import ShowDetailsButton from "../components/ShowDetailsButton";
import Expertise from "../components/Expertise";

function Home() {
  return (
    <>
      <Hero />
      <SkillsBar />
      <PersonalInfo />
      <h1 className="text-4xl ml-6">Profesional Career</h1>
      <span className="block rounded w-[332px] h-[3px] bg-[#E65C4f]"></span>
      <div className="flex flex-wrap">
        <ShowProjects
          company="Oh!meat"
          duration="2024 - Present"
          position="Jr.Software Engineer"
          description="Assisted in developing the main dashboard and website by designing and implementing UI components using React.js.
        Integrated RESTful APIs for dynamic data rendering and collaborated on clean, scalable front-end architecture.
        Contributed to state management using tools like React Context or Redux and participated in code reviews."
        />
      </div>
      <h1 className="text-4xl ml-10 mt-10 ">Expertise</h1>
      <span className="block rounded w-[332px] h-[3px] bg-[#E65C4f]"></span>
      <div className="flex min-h-[500px] overflow-hidden">
        <Expertise />
        <ShowDetailsButton />
      </div>
    </>
  );
}

export default Home;
