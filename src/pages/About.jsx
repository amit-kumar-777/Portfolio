import React, { useState } from "react";
import Hero from "../assets/Hero.jpeg";
// import game from "../assets/game.jpg";
import game from "../assets/pexels-borja-lopez-1346154.jpg";
import piano from "../assets/piano.jpg";

function About() {
  const [images, setImages] = useState([Hero, game, piano]);

  const handleImageClick = (index) => {
    // Move clicked image to the front
    const reordered = [images[index], ...images.filter((_, i) => i !== index)];
    setImages(reordered);
  };

  return (
    <section
      id="about"
      className="w-full pt-30 py-20 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-6">
            A bit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E65C4f] to-orange-400">
              about me
            </span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300 hover:scale-[1.02] transition-transform duration-300">
            I’m <span className="text-[#E65C4f] font-semibold">Amit Kumar</span>,
            a passionate <span className="text-[#E65C4f]">Software Developer</span> specializing in{" "}
            <span className="text-[#E65C4f]">React JS</span>. I hold a Bachelor's in{" "}
            <span className="text-[#E65C4f]">Computer Applications</span> from Osmania University.
            <br className="hidden sm:block" />
            I enjoy crafting clean, user-focused web apps that solve problems and feel amazing to use.
            <br className="hidden sm:block" />
            Outside of coding, you’ll find me vibing to{" "}
            <span className="text-[#E65C4f]">music</span>, battling it out in{" "}
            <span className="text-[#E65C4f]">games</span>, or exploring new places while{" "}
            <span className="text-[#E65C4f]">traveling</span>.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e65c4f33] to-transparent rounded-full blur-3xl opacity-30 z-0" />

          <div className="relative w-[180px] h-[260px] sm:w-[220px] sm:h-[300px] md:w-[300px] md:h-[360px] lg:w-[350px] lg:h-[400px] group">
            {images.map((img, index) => {
              // Determine zIndex and transform based on position
              const zIndex = 30 - index * 10;
              const transforms = [
                "z-30 rotate-[-3deg] translate-x-2 translate-y-2",
                "z-20 rotate-[5deg] -translate-x-6 -translate-y-4",
                "z-10 rotate-[6deg] translate-x-6 translate-y-6"
              ];

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Layer ${index}`}
                  onClick={() => handleImageClick(index)}
                  className={`absolute w-full h-full object-cover rounded-xl shadow-xl cursor-pointer transition duration-500 transform hover:scale-105 ${transforms[index]} z-[${zIndex}]`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
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

//         <p className="text-lg sm:text-2xl  transform transition-transform duration-300 hover:scale-[1.02]">
//           I’m <span className="text-[#E65C4f] font-semibold">Amit Kumar</span>,
//           a passionate Software Developer specializing in{" "}
//           <span className="text-[#E65C4f]">React JS</span>. I hold a Bachelor of
//           Commerce with a specialization in{" "}
//           <span className="text-[#E65C4f]">Computer Applications</span> from{" "}
//           Osmania University. <br className="hidden sm:block" />I love building
//           innovative, user-friendly web applications that solve real-world
//           problems and deliver great user experiences.{" "}
//           <br className="hidden sm:block" />
//           Outside of work, I enjoy <span className="text-[#E65C4f]">music</span>
//           , <span className="text-[#E65C4f]">gaming</span>, and{" "}
//           <span className="text-[#E65C4f]">traveling</span> — they help keep my
//           creativity alive.
//         </p>
//       </div>

//       {/* Images and Gradients */}
//       <div className="absolute md:relative z-0 opacity-30 md:opacity-90 pointer-events-none select-none w-full">
//         {/* Gradient Overlays */}
//         <div className="absolute left-0">
//           <div className="bg-gradient-to-r from-black to-[#fff0] w-[80px] h-screen"></div>
//         </div>
//         <div className="absolute right-53">
//           <div className="bg-gradient-to-l from-black to-[#fff0] w-[80px] h-screen"></div>
//         </div>
//         <div className="absolute top-0">
//           <div className="bg-gradient-to-b from-black to-[#fff0] w-screen h-[100px]"></div>
//         </div>
//         <div className="absolute bottom-0">
//           <div className="bg-gradient-to-t from-black to-[#fff0] w-screen h-[100px]"></div>
//         </div>

//         {/* 3 Image Grid */}
//         <div className="relative w-full max-w-4xl mx-auto overflow-x-hidden">
//           <div className="grid grid-cols-3 gap-2">
//             <img
//               src={game}
//               alt="Game"
//               width="220"
//               height="160"
//               className="absolute shadow-lg mx-auto"
//             />
//             <img
//               src={Hero}
//               alt="Hero"
//               width="220"
//               height="160"
//               className="absolute right-50 shadow-lg mx-auto"
//             />
//             <img
//               src={piano}
//               alt="Piano"
//               width="220"
//               height="160"
//               className="rounded-md shadow-lg mx-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Extra background gradients (for depth) */}
//       <div className="absolute inset-0 z-0 pointer-events-none select-none">
//         <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-black to-transparent"></div>
//         <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-black to-transparent"></div>
//         <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-black to-transparent"></div>
//         <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-t from-black to-transparent"></div>
//       </div>
//     </div>
//   );
// }

// export default About;