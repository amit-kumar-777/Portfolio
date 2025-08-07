import React from "react";
import Hero from "../assets/Hero.jpeg";
import game from "../assets/game.jpg";
import piano from "../assets/piano.jpg";


function About() {
  return (
    <div
      id="about"
      className="h-screen relative flex items-center justify-center w-full px-6 sm:px-10 overflow-hidden"
    >
      {/* Text Content */}
      <div className="max-w-2xl z-10 flex flex-col text-left w-full h-full justify-center">
        <h2 className="uppercase text-2xl sm:text-3xl font-semibold  tracking-wide mb-4">
          A bit <span className="text-[#E65C4f]">about me</span>
        </h2>

        <p className="text-lg sm:text-2xl  transform transition-transform duration-300 hover:scale-[1.02]">
          I’m <span className="text-[#E65C4f] font-semibold">Amit Kumar</span>,
          a passionate Software Developer specializing in{" "}
          <span className="text-[#E65C4f]">React JS</span>. I hold a Bachelor of
          Commerce with a specialization in{" "}
          <span className="text-[#E65C4f]">Computer Applications</span> from{" "}
          Osmania University. <br className="hidden sm:block" />I love building
          innovative, user-friendly web applications that solve real-world
          problems and deliver great user experiences.{" "}
          <br className="hidden sm:block" />
          Outside of work, I enjoy <span className="text-[#E65C4f]">music</span>
          , <span className="text-[#E65C4f]">gaming</span>, and{" "}
          <span className="text-[#E65C4f]">traveling</span> — they help keep my
          creativity alive.
        </p>
      </div>

      {/* Images and Gradients */}
      <div className="absolute md:relative z-0 opacity-30 md:opacity-90 pointer-events-none select-none w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0">
          <div className="bg-gradient-to-r from-black to-[#fff0] w-[80px] h-screen"></div>
        </div>
        <div className="absolute right-53">
          <div className="bg-gradient-to-l from-black to-[#fff0] w-[80px] h-screen"></div>
        </div>
        <div className="absolute top-0">
          <div className="bg-gradient-to-b from-black to-[#fff0] w-screen h-[100px]"></div>
        </div>
        <div className="absolute bottom-0">
          <div className="bg-gradient-to-t from-black to-[#fff0] w-screen h-[100px]"></div>
        </div>

        {/* 3 Image Grid */}
        <div className="relative w-full max-w-4xl mx-auto overflow-x-hidden">
          <div className="grid grid-cols-3 gap-2">
            <img
              src={game}
              alt="Game"
              width="220"
              height="160"
              className="absolute shadow-lg mx-auto"
            />
            <img
              src={Hero}
              alt="Hero"
              width="220"
              height="160"
              className="absolute right-50 shadow-lg mx-auto"
            />
            <img
              src={piano}
              alt="Piano"
              width="220"
              height="160"
              className="rounded-md shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Extra background gradients (for depth) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-black to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
}

export default About;

// import React from "react";
// import Hero from "../assets/Hero.jpeg";
// import game from "../assets/game.jpg";
// import piano from "../assets/piano.jpg";

// function About() {
//   return (
//     <div
//       id="about"
//       className="h-screen relative flex items-center justify-center w-full px-6 sm:px-10 overflow-hidden"
//     >
//       {/* Text Content */}
//       <div className="max-w-2xl z-10 flex flex-col text-left w-full h-full justify-center">
//         <h2 className="uppercase text-2xl sm:text-3xl font-semibold  tracking-wide mb-4">
//           A bit <span className="text-[#E65C4f]">about me</span>
//         </h2>

//         <p className="text-lg sm:text-xl leading-relaxed ">
//           I am a{" "}
//           <span className="text-[#E65C4f] font-semibold">UI/UX designer</span> who
//           is passionate about crafting{" "}
//           <span className="text-[#E65C4f] font-medium">
//             beautiful and joyful digital experiences
//           </span>
//           . <br className="hidden sm:block" />
//           Beyond design, I love <span className="text-[#E65C4f]">music</span>,{" "}
//           <span className="text-[#E65C4f]">games</span>, and{" "}
//           <span className="text-[#E65C4f]">traveling</span>.
//         </p>
//       </div>

//       <div className="absolute md:relative z-0 opacity-30 md:opacity-90 pointer-events-none select-none">
//         {/* Left Gradient */}
//         <div className="absolute left-0">
//           <div className="bg-gradient-to-r from-black to-[#fff0] w-[100px] h-screen"></div>
//         </div>

//         {/* Right Gradient */}
//         <div className="absolute right-0">
//           <div className="bg-gradient-to-l from-black to-[#fff0] w-[100px] h-screen"></div>
//         </div>

//         {/* Top Gradient */}
//         <div className="absolute top-0">
//           <div className="bg-gradient-to-b from-black to-[#fff0] w-screen h-[120px]"></div>
//         </div>

//         {/* Bottom Gradient */}
//         <div className="absolute bottom-0">
//           <div className="bg-gradient-to-t from-black to-[#fff0] w-screen h-[120px]"></div>
//         </div>

//         {/* Background Image */}
//         <img
//           src={Hero}
//           alt="Image"
//           width="200"
//           height="150"
//           className="mx-auto"
//         />
//         <img
//           src={game}
//           alt="Image"
//           width="200"
//           height="200"
//           className="mx-auto"
//         />
//         <img
//           src={piano}
//           alt="Image"
//           width="200"
//           height="200"
//           className="mx-auto"
//         />
//       </div>

//       {/* Image + Gradients */}
//       <div className="absolute inset-0 z-0 pointer-events-none select-none">
//         {/* Gradients for visual depth */}
//         <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-black to-transparent"></div>
//         <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-black to-transparent"></div>
//         <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-black to-transparent"></div>
//         <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-black to-transparent"></div>
//       </div>
//     </div>
//   );
// }

// export default About;
