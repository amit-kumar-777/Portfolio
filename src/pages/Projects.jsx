import React from 'react'
import Project from '../components/ShowProjects'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Projects() {
  
  return (
    <>
    <div className='bg-gray-900 w-full h-screen px-10 py-20'>
    <div className='flex pb-2 justify-center text-[#E65C4f] font-bold text-4xl underline'>My Projects</div>
      <Project
          company="Oh!meat"
          duration="2024 - Present"
          position="Jr.Software Engineer"
          description="Assisted in developing the main dashboard and website by designing and implementing UI components using React.js.
        Integrated RESTful APIs for dynamic data rendering and collaborated on clean, scalable front-end architecture.
        Contributed to state management using tools like React Context or Redux and participated in code reviews."
        />
    </div>
    </>
  )
}

export default Projects