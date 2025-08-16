// "use client";

// import { useState, useEffect } from "react";

// export default function TechnicalExpertise() {
//   const [hoveredPanel, setHoveredPanel] = useState(null);
//   const [particles, setParticles] = useState([]);

//   const skillPanels = [
//     {
//       id: "frontend",
//       title: "Frontend",
//       position: { x: -300, y: -150, z: 0 }, // Increased spacing to prevent overlap
//       rotation: { x: 0, y: 15, z: 0 },
//       skills: [
//         { name: "React", level: 95 },
//         { name: "Next.js", level: 90 },
//         { name: "TypeScript", level: 88 },
//         { name: "Tailwind", level: 92 },
//       ],
//       chartType: "radar",
//     },
//     {
//       id: "backend",
//       title: "Backend",
//       position: { x: 300, y: -150, z: 0 }, // Increased spacing to prevent overlap
//       rotation: { x: 0, y: -15, z: 0 },
//       skills: [
//         { name: "Node.js", level: 85 },
//         { name: "Python", level: 80 },
//         { name: "PostgreSQL", level: 82 },
//         { name: "MongoDB", level: 78 },
//       ],
//       chartType: "bars",
//     },
//     {
//       id: "devops",
//       title: "DevOps",
//       position: { x: -200, y: 260, z: -0 }, // Better positioning
//       rotation: { x: 0, y: 15, z: 0 },
//       skills: [
//         { name: "Docker", level: 75 },
//         { name: "AWS", level: 70 },
//         { name: "CI/CD", level: 80 },
//         { name: "Kubernetes", level: 65 },
//       ],
//       chartType: "rings",
//     },
//     {
//       id: "tools",
//       title: "Tools",
//       position: { x: 200, y: 260, z: -15 }, // Better positioning
//       rotation: { x: -5, y: -15, z: 0 },
//       skills: [
//         { name: "Git", level: 90 },
//         { name: "VS Code", level: 95 },
//         { name: "Postman", level: 85 },
//       ],
//       chartType: "progress",
//     },
//   ];

//   useEffect(() => {
//     const newParticles = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 2 + 1,
//       speed: Math.random() * 0.5 + 0.1,
//     }));
//     setParticles(newParticles);

//     const interval = setInterval(() => {
//       setParticles((prev) =>
//         prev.map((particle) => ({
//           ...particle,
//           x: (particle.x + particle.speed) % 100,
//         }))
//       );
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   const renderChart = (panel) => {
//     switch (panel.chartType) {
//       case "radar":
//         return (
//           <div className="relative w-full h-24">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <defs>
//                 <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
//                   <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
//                   <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
//                 </radialGradient>
//               </defs>
//               {/* Radar grid */}
//               {[20, 40, 60, 80].map((r) => (
//                 <circle
//                   key={r}
//                   cx="50"
//                   cy="50"
//                   r={r / 2}
//                   fill="none"
//                   stroke="rgba(59, 130, 246, 0.2)"
//                   strokeWidth="0.5"
//                 />
//               ))}
//               {/* Radar lines */}
//               {panel.skills.map((_, i) => {
//                 const angle = i * 90 - 90;
//                 const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
//                 const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
//                 return (
//                   <line
//                     key={i}
//                     x1="50"
//                     y1="50"
//                     x2={x}
//                     y2={y}
//                     stroke="rgba(59, 130, 246, 0.2)"
//                     strokeWidth="0.5"
//                   />
//                 );
//               })}
//               {/* Data polygon */}
//               <polygon
//                 points={panel.skills
//                   .map((skill, i) => {
//                     const angle = i * 90 - 90;
//                     const radius = (skill.level / 100) * 40;
//                     const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
//                     const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
//                     return `${x},${y}`;
//                   })
//                   .join(" ")}
//                 fill="url(#radarGrad)"
//                 stroke="rgb(59, 130, 246)"
//                 strokeWidth="1"
//               />
//             </svg>
//           </div>
//         );

//       case "bars":
//         return (
//           <div className="space-y-2">
//             {panel.skills.map((skill, i) => (
//               <div key={skill.name} className="flex items-center gap-2">
//                 <span className="text-xs text-blue-300 w-12 truncate">
//                   {skill.name}
//                 </span>
//                 <div className="flex-1 h-2 bg-blue-900/30 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000"
//                     style={{ width: `${skill.level}%` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case "rings":
//         return (
//           <div className="grid grid-cols-2 gap-3">
//             {panel.skills.map((skill, i) => (
//               <div key={skill.name} className="flex flex-col items-center">
//                 <div className="relative w-12 h-12">
//                   <svg
//                     viewBox="0 0 36 36"
//                     className="w-full h-full transform -rotate-90"
//                   >
//                     <circle
//                       cx="18"
//                       cy="18"
//                       r="16"
//                       fill="none"
//                       stroke="rgba(59, 130, 246, 0.2)"
//                       strokeWidth="2"
//                     />
//                     <circle
//                       cx="18"
//                       cy="18"
//                       r="16"
//                       fill="none"
//                       stroke="rgb(59, 130, 246)"
//                       strokeWidth="2"
//                       strokeDasharray={`${skill.level}, 100`}
//                       className="transition-all duration-1000"
//                     />
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-xs text-blue-300 font-mono">
//                       {skill.level}
//                     </span>
//                   </div>
//                 </div>
//                 <span className="text-xs text-blue-300 mt-1 truncate w-full text-center">
//                   {skill.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         );

//       case "progress":
//         return (
//           <div className="space-y-3">
//             {panel.skills.map((skill, i) => (
//               <div key={skill.name} className="text-center">
//                 <div className="text-xs text-blue-300 mb-1 truncate">
//                   {skill.name}
//                 </div>
//                 <div className="w-full h-1 bg-blue-900/30 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-1000"
//                     style={{ width: `${skill.level}%` }}
//                   />
//                 </div>
//                 <div className="text-xs text-blue-400 mt-1 font-mono">
//                   {skill.level}%
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
//       {/* Background particles */}
//       <div className="absolute inset-0">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//             linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//           `,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-20">
//         {/* Section title */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Technical
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//               Expertise
//             </span>
//           </h2>
//           <p className="text-blue-300 text-lg max-w-2xl mx-auto">
//             Interactive holographic interface showcasing technical proficiencies
//           </p>
//         </div>

//         {/* 3D Scene Container */}
//         <div
//           className="relative w-full max-w-7xl mx-auto h-[700px] md:h-[900px]"
//           style={{ perspective: "1200px" }}
//         >
//           {" "}
//           {/* Increased container size and perspective */}
//           {/* Central Platform */}
//           <div
//             className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             style={{ zIndex: 10 }}
//           >
//             {" "}
//             {/* Added z-index */}
//             <div className="relative">
//               {/* Platform tiers */}
//               {[0, 1, 2, 3].map((tier) => (
//                 <div
//                   key={tier}
//                   className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/20 to-white/10 rounded-full border border-white/30"
//                   style={{
//                     width: `${120 - tier * 20}px`,
//                     height: `${8 + tier * 2}px`,
//                     top: `${-tier * 12}px`,
//                     boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
//                     animation: `float ${
//                       3 + tier * 0.5
//                     }s ease-in-out infinite alternate`,
//                   }}
//                 />
//               ))}

//               {/* Central core */}
//               <div className="w-16 h-16 bg-gradient-to-br from-white/40 to-white/20 rounded-full border-2 border-white/50 flex items-center justify-center">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse" />
//               </div>
//             </div>
//           </div>
//           {/* Floating Skill Panels */}
//           {skillPanels.map((panel, index) => (
//             <div
//               key={panel.id}
//               className="absolute transition-all duration-500 cursor-pointer group"
//               style={{
//                 left: `calc(50% + ${
//                   panel.position.x * (window.innerWidth > 768 ? 1 : 0.4)
//                 }px)`,
//                 top: `calc(50% + ${
//                   panel.position.y * (window.innerWidth > 768 ? 1 : 0.6)
//                 }px)`,
//                 transform: `
//                   translate(-50%, -50%)
//                   translateZ(${panel.position.z}px)
//                   rotateX(${panel.rotation.x}deg)
//                   rotateY(${panel.rotation.y}deg)
//                   rotateZ(${panel.rotation.z}deg)
//                   ${
//                     hoveredPanel === panel.id
//                       ? "scale(1.15) translateZ(100px)"
//                       : "scale(1)"
//                   }
//                 `,
//                 transformStyle: "preserve-3d",
//                 zIndex: hoveredPanel === panel.id ? 50 : 20 + index, // Proper z-index management
//               }}
//               onMouseEnter={() => setHoveredPanel(panel.id)}
//               onMouseLeave={() => setHoveredPanel(null)}
//             >
//               {/* Connection beam to center */}
//               <div
//                 className="absolute bg-gradient-to-r from-transparent via-blue-400/50 to-transparent pointer-events-none"
//                 style={{
//                   width: "2px",
//                   height:
//                     Math.sqrt(panel.position.x ** 2 + panel.position.y ** 2) +
//                     "px", // Dynamic beam length
//                   left: "50%",
//                   top: "50%",
//                   transform: `translate(-50%, -50%) rotate(${
//                     Math.atan2(panel.position.y, panel.position.x) *
//                     (180 / Math.PI)
//                   }deg)`,
//                   transformOrigin: "bottom center",
//                   opacity: hoveredPanel === panel.id ? 0.8 : 0.3,
//                   transition: "all 0.5s ease",
//                 }}
//               />

//               {/* Panel */}
//               <div
//                 className={`
//                 w-72 md:w-80 p-6 rounded-xl border backdrop-blur-md transition-all duration-500 shadow-2xl
//                 ${
//                   hoveredPanel === panel.id
//                     ? "bg-blue-900/60 border-blue-400/80 shadow-blue-500/30"
//                     : "bg-blue-900/30 border-blue-500/40 shadow-blue-500/15"
//                 }
//               `}
//                 style={{
//                   boxShadow:
//                     hoveredPanel === panel.id
//                       ? "0 25px 50px -12px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.3)"
//                       : "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.2)",
//                 }}
//               >
//                 {/* Panel header */}
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-bold text-white truncate">
//                     {panel.title}
//                   </h3>
//                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
//                 </div>

//                 {/* Chart visualization */}
//                 <div className="mb-4">{renderChart(panel)}</div>

//                 {/* Skills list */}
//                 <div className="space-y-1">
//                   {panel.skills.map((skill, i) => (
//                     <div
//                       key={skill.name}
//                       className="flex justify-between items-center text-sm"
//                     >
//                       <span className="text-blue-200 truncate flex-1">
//                         {skill.name}
//                       </span>
//                       <span className="text-blue-400 font-mono ml-2">
//                         {skill.level}%
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Panel status */}
//                 <div className="mt-4 pt-3 border-t border-blue-500/20 flex items-center justify-between">
//                   <span className="text-xs text-blue-300">Status: Active</span>
//                   <div className="flex gap-1">
//                     {[...Array(3)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
//                         style={{ animationDelay: `${i * 0.2}s` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* Holographic effects */}
//           <div className="absolute inset-0 pointer-events-none">
//             {/* Scanning lines */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-pulse" />

//             {/* Corner brackets */}
//             {["top-left", "top-right", "bottom-left", "bottom-right"].map(
//               (corner) => (
//                 <div
//                   key={corner}
//                   className={`absolute w-8 h-8 border-2 border-blue-400/50 ${
//                     corner.includes("top") ? "top-4" : "bottom-4"
//                   } ${corner.includes("left") ? "left-4" : "right-4"} ${
//                     corner === "top-left"
//                       ? "border-r-0 border-b-0"
//                       : corner === "top-right"
//                       ? "border-l-0 border-b-0"
//                       : corner === "bottom-left"
//                       ? "border-r-0 border-t-0"
//                       : "border-l-0 border-t-0"
//                   }`}
//                 />
//               )
//             )}
//           </div>
//         </div>

//         {/* Status bar */}
//         <div className="mt-12 flex justify-center">
//           <div className="bg-black/40 backdrop-blur-md rounded-full px-8 py-4 border border-blue-500/40 shadow-lg">
//             {" "}
//             {/* Enhanced status bar styling */}
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 <span className="text-blue-300">System Online</span>
//               </div>
//               <div className="w-px h-4 bg-blue-500/30" />
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-300">
//                   Panels: {skillPanels.length}
//                 </span>
//               </div>
//               <div className="w-px h-4 bg-blue-500/30" />
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-300">
//                   Active: {hoveredPanel || "None"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           100% {
//             transform: translateY(-10px);
//           }
//         }

//         /* Added media queries for better responsive behavior */
//         @media (max-width: 768px) {
//           .absolute {
//             position: relative !important;
//             left: auto !important;
//             top: auto !important;
//             transform: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";

// export default function TechnicalExpertise() {
//   const [hoveredPanel, setHoveredPanel] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const skillPanels = [
//     {
//       id: "frontend",
//       title: "Frontend",
//       position: isMobile ? { x: 0, y: -120, z: 0 } : { x: -280, y: -120, z: 0 },
//       rotation: { x: 0, y: isMobile ? 0 : 15, z: 0 },
//       skills: [
//         { name: "React", level: 95 },
//         { name: "Next.js", level: 90 },
//         { name: "TypeScript", level: 88 },
//         { name: "Tailwind", level: 92 },
//       ],
//       chartType: "radar",
//     },
//     {
//       id: "backend",
//       title: "Backend",
//       position: isMobile ? { x: 0, y: 40, z: 0 } : { x: 280, y: -120, z: 0 },
//       rotation: { x: 0, y: isMobile ? 0 : -15, z: 0 },
//       skills: [
//         { name: "Node.js", level: 85 },
//         { name: "Python", level: 80 },
//         { name: "PostgreSQL", level: 82 },
//         { name: "MongoDB", level: 78 },
//       ],
//       chartType: "bars",
//     },
//     {
//       id: "devops",
//       title: "DevOps",
//       position: isMobile ? { x: 0, y: 200, z: 0 } : { x: -180, y: 180, z: -20 },
//       rotation: { x: isMobile ? 0 : 10, y: 0, z: 0 },
//       skills: [
//         { name: "Docker", level: 75 },
//         { name: "AWS", level: 70 },
//         { name: "CI/CD", level: 80 },
//         { name: "Kubernetes", level: 65 },
//       ],
//       chartType: "rings",
//     },
//     {
//       id: "tools",
//       title: "Tools",
//       position: isMobile ? { x: 0, y: 360, z: 0 } : { x: 180, y: 180, z: -15 },
//       rotation: { x: isMobile ? 0 : -5, y: 0, z: 0 },
//       skills: [
//         { name: "Git", level: 90 },
//         { name: "VS Code", level: 95 },
//         { name: "Figma", level: 75 },
//         { name: "Postman", level: 85 },
//       ],
//       chartType: "progress",
//     },
//   ];

//   useEffect(() => {
//     const newParticles = Array.from({ length: isMobile ? 10 : 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 2 + 1,
//       speed: Math.random() * 0.5 + 0.1,
//     }));
//     setParticles(newParticles);

//     const interval = setInterval(() => {
//       setParticles((prev) =>
//         prev.map((particle) => ({
//           ...particle,
//           x: (particle.x + particle.speed) % 100,
//         }))
//       );
//     }, 50);

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   const renderChart = (panel) => {
//     switch (panel.chartType) {
//       case "radar":
//         return (
//           <div className="relative w-full h-20 md:h-24">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <defs>
//                 <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
//                   <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
//                   <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
//                 </radialGradient>
//               </defs>
//               {[20, 40, 60, 80].map((r) => (
//                 <circle
//                   key={r}
//                   cx="50"
//                   cy="50"
//                   r={r / 2}
//                   fill="none"
//                   stroke="rgba(59, 130, 246, 0.2)"
//                   strokeWidth="0.5"
//                 />
//               ))}
//               {panel.skills.map((_, i) => {
//                 const angle = i * 90 - 90;
//                 const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
//                 const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
//                 return (
//                   <line
//                     key={i}
//                     x1="50"
//                     y1="50"
//                     x2={x}
//                     y2={y}
//                     stroke="rgba(59, 130, 246, 0.2)"
//                     strokeWidth="0.5"
//                   />
//                 );
//               })}
//               <polygon
//                 points={panel.skills
//                   .map((skill, i) => {
//                     const angle = i * 90 - 90;
//                     const radius = (skill.level / 100) * 40;
//                     const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
//                     const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
//                     return `${x},${y}`;
//                   })
//                   .join(" ")}
//                 fill="url(#radarGrad)"
//                 stroke="rgb(59, 130, 246)"
//                 strokeWidth="1"
//               />
//             </svg>
//           </div>
//         );

//       case "bars":
//         return (
//           <div className="space-y-2">
//             {panel.skills.map((skill) => (
//               <div key={skill.name} className="flex items-center gap-2">
//                 <span className="text-xs text-blue-300 w-16 md:w-20 truncate flex-shrink-0">
//                   {skill.name}
//                 </span>
//                 <div className="flex-1 h-2 bg-blue-900/30 rounded-full overflow-hidden min-w-0">
//                   <div
//                     className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000"
//                     style={{ width: `${skill.level}%` }}
//                   />
//                 </div>
//                 <span className="text-xs text-blue-400 font-mono w-8 text-right flex-shrink-0">
//                   {skill.level}%
//                 </span>
//               </div>
//             ))}
//           </div>
//         );

//       case "rings":
//         return (
//           <div className="grid grid-cols-2 gap-2 md:gap-3">
//             {panel.skills.map((skill) => (
//               <div key={skill.name} className="flex flex-col items-center">
//                 <div className="relative w-10 h-10 md:w-12 md:h-12">
//                   <svg
//                     viewBox="0 0 36 36"
//                     className="w-full h-full transform -rotate-90"
//                   >
//                     <circle
//                       cx="18"
//                       cy="18"
//                       r="16"
//                       fill="none"
//                       stroke="rgba(59, 130, 246, 0.2)"
//                       strokeWidth="2"
//                     />
//                     <circle
//                       cx="18"
//                       cy="18"
//                       r="16"
//                       fill="none"
//                       stroke="rgb(59, 130, 246)"
//                       strokeWidth="2"
//                       strokeDasharray={`${skill.level}, 100`}
//                       className="transition-all duration-1000"
//                     />
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-xs text-blue-300 font-mono">
//                       {skill.level}
//                     </span>
//                   </div>
//                 </div>
//                 <span className="text-xs text-blue-300 mt-1 text-center w-full max-w-16 leading-tight">
//                   {skill.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         );

//       case "progress":
//         return (
//           <div className="space-y-3">
//             {panel.skills.map((skill) => (
//               <div key={skill.name} className="text-center">
//                 <div className="text-xs text-blue-300 mb-1 truncate px-1">
//                   {skill.name}
//                 </div>
//                 <div className="w-full h-1 bg-blue-900/30 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-1000"
//                     style={{ width: `${skill.level}%` }}
//                   />
//                 </div>
//                 <div className="text-xs text-blue-400 mt-1 font-mono">
//                   {skill.level}%
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="relative min-h-screen bg-slate-900 overflow-hidden">
//       {/* Background particles */}
//       <div className="absolute inset-0">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//             linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//           `,
//             backgroundSize: isMobile ? "30px 30px" : "50px 50px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
//         {/* Section title */}
//         <div className="text-center mb-12 md:mb-20">
//           <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
//             Technical
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//               Expertise
//             </span>
//           </h2>
//           <p className="text-blue-300 text-base md:text-lg max-w-2xl mx-auto px-4">
//             Interactive holographic interface showcasing technical proficiencies
//           </p>
//         </div>

//         <div
//           className={`relative w-full max-w-7xl mx-auto ${
//             isMobile ? "h-auto" : "h-[700px] md:h-[900px]"
//           }`}
//           style={{ perspective: isMobile ? "none" : "1200px" }}
//         >
//           {/* Central Platform - Hidden on mobile for better space usage */}
//           {!isMobile && (
//             <div
//               className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               style={{ zIndex: 10 }}
//             >
//               <div className="relative">
//                 {[0, 1, 2, 3].map((tier) => (
//                   <div
//                     key={tier}
//                     className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/20 to-white/10 rounded-full border border-white/30"
//                     style={{
//                       width: `${120 - tier * 20}px`,
//                       height: `${8 + tier * 2}px`,
//                       top: `${-tier * 12}px`,
//                       boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
//                       animation: `float ${
//                         3 + tier * 0.5
//                       }s ease-in-out infinite alternate`,
//                     }}
//                   />
//                 ))}
//                 <div className="w-16 h-16 bg-gradient-to-br from-white/40 to-white/20 rounded-full border-2 border-white/50 flex items-center justify-center">
//                   <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {isMobile ? (
//             // Mobile: Vertical stack layout
//             <div className="space-y-8">
//               {skillPanels.map((panel, index) => (
//                 <div
//                   key={panel.id}
//                   className="w-full max-w-sm mx-auto transition-all duration-500 cursor-pointer"
//                   style={{
//                     transform:
//                       hoveredPanel === panel.id ? "scale(1.05)" : "scale(1)",
//                     zIndex: hoveredPanel === panel.id ? 50 : 20 + index,
//                   }}
//                   onTouchStart={() => setHoveredPanel(panel.id)}
//                   onTouchEnd={() => setHoveredPanel(null)}
//                   onClick={() =>
//                     setHoveredPanel(hoveredPanel === panel.id ? null : panel.id)
//                   }
//                 >
//                   <div
//                     className={`
//                       w-full p-4 md:p-6 rounded-xl border backdrop-blur-md transition-all duration-500 shadow-2xl
//                       ${
//                         hoveredPanel === panel.id
//                           ? "bg-blue-900/60 border-blue-400/80 shadow-blue-500/30"
//                           : "bg-blue-900/30 border-blue-500/40 shadow-blue-500/15"
//                       }
//                     `}
//                   >
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-lg md:text-xl font-bold text-white truncate">
//                         {panel.title}
//                       </h3>
//                       <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
//                     </div>
//                     <div className="mb-4">{renderChart(panel)}</div>
//                     <div className="space-y-1">
//                       {panel.skills.map((skill) => (
//                         <div
//                           key={skill.name}
//                           className="flex justify-between items-center text-sm"
//                         >
//                           <span className="text-blue-200 truncate flex-1 mr-2">
//                             {skill.name}
//                           </span>
//                           <span className="text-blue-400 font-mono flex-shrink-0">
//                             {skill.level}%
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="mt-4 pt-3 border-t border-blue-500/20 flex items-center justify-between">
//                       <span className="text-xs text-blue-300">
//                         Status: Active
//                       </span>
//                       <div className="flex gap-1">
//                         {[...Array(3)].map((_, i) => (
//                           <div
//                             key={i}
//                             className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
//                             style={{ animationDelay: `${i * 0.2}s` }}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             // Desktop: 3D floating panels
//             skillPanels.map((panel, index) => (
//               <div
//                 key={panel.id}
//                 className="absolute transition-all duration-500 cursor-pointer group"
//                 style={{
//                   left: `calc(50% + ${panel.position.x}px)`,
//                   top: `calc(50% + ${panel.position.y}px)`,
//                   transform: `
//                     translate(-50%, -50%)
//                     translateZ(${panel.position.z}px)
//                     rotateX(${panel.rotation.x}deg)
//                     rotateY(${panel.rotation.y}deg)
//                     rotateZ(${panel.rotation.z}deg)
//                     ${
//                       hoveredPanel === panel.id
//                         ? "scale(1.15) translateZ(100px)"
//                         : "scale(1)"
//                     }
//                   `,
//                   transformStyle: "preserve-3d",
//                   zIndex: hoveredPanel === panel.id ? 50 : 20 + index,
//                 }}
//                 onMouseEnter={() => setHoveredPanel(panel.id)}
//                 onMouseLeave={() => setHoveredPanel(null)}
//               >
//                 {/* Connection beam */}
//                 <div
//                   className="absolute bg-gradient-to-r from-transparent via-blue-400/50 to-transparent pointer-events-none"
//                   style={{
//                     width: "2px",
//                     height:
//                       Math.sqrt(panel.position.x ** 2 + panel.position.y ** 2) +
//                       "px",
//                     left: "50%",
//                     top: "50%",
//                     transform: `translate(-50%, -50%) rotate(${
//                       Math.atan2(panel.position.y, panel.position.x) *
//                       (180 / Math.PI)
//                     }deg)`,
//                     transformOrigin: "bottom center",
//                     opacity: hoveredPanel === panel.id ? 0.8 : 0.3,
//                     transition: "all 0.5s ease",
//                   }}
//                 />

//                 <div
//                   className={`
//                     w-72 md:w-80 p-6 rounded-xl border backdrop-blur-md transition-all duration-500 shadow-2xl
//                     ${
//                       hoveredPanel === panel.id
//                         ? "bg-blue-900/60 border-blue-400/80 shadow-blue-500/30"
//                         : "bg-blue-900/30 border-blue-500/40 shadow-blue-500/15"
//                     }
//                   `}
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-xl font-bold text-white truncate">
//                       {panel.title}
//                     </h3>
//                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
//                   </div>
//                   <div className="mb-4">{renderChart(panel)}</div>
//                   <div className="space-y-1">
//                     {panel.skills.map((skill) => (
//                       <div
//                         key={skill.name}
//                         className="flex justify-between items-center text-sm"
//                       >
//                         <span className="text-blue-200 truncate flex-1">
//                           {skill.name}
//                         </span>
//                         <span className="text-blue-400 font-mono ml-2">
//                           {skill.level}%
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="mt-4 pt-3 border-t border-blue-500/20 flex items-center justify-between">
//                     <span className="text-xs text-blue-300">
//                       Status: Active
//                     </span>
//                     <div className="flex gap-1">
//                       {[...Array(3)].map((_, i) => (
//                         <div
//                           key={i}
//                           className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
//                           style={{ animationDelay: `${i * 0.2}s` }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}

//           {/* Holographic effects - Simplified for mobile */}
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-pulse" />
//             {!isMobile && (
//               <>
//                 {["top-left", "top-right", "bottom-left", "bottom-right"].map(
//                   (corner) => (
//                     <div
//                       key={corner}
//                       className={`absolute w-6 md:w-8 h-6 md:h-8 border-2 border-blue-400/50 ${
//                         corner.includes("top") ? "top-4" : "bottom-4"
//                       } ${corner.includes("left") ? "left-4" : "right-4"} ${
//                         corner === "top-left"
//                           ? "border-r-0 border-b-0"
//                           : corner === "top-right"
//                           ? "border-l-0 border-b-0"
//                           : corner === "bottom-left"
//                           ? "border-r-0 border-t-0"
//                           : "border-l-0 border-t-0"
//                       }`}
//                     />
//                   )
//                 )}
//               </>
//             )}
//           </div>
//         </div>

//         {/* Status bar */}
//         <div className="mt-8 md:mt-12 flex justify-center">
//           <div className="bg-black/40 backdrop-blur-md rounded-full px-4 md:px-8 py-3 md:py-4 border border-blue-500/40 shadow-lg">
//             <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 <span className="text-blue-300">System Online</span>
//               </div>
//               <div className="w-px h-4 bg-blue-500/30" />
//               <div className="flex items-center gap-2">
//                 <span className="text-blue-300">
//                   Panels: {skillPanels.length}
//                 </span>
//               </div>
//               {!isMobile && (
//                 <>
//                   <div className="w-px h-4 bg-blue-500/30" />
//                   <div className="flex items-center gap-2">
//                     <span className="text-blue-300">
//                       Active: {hoveredPanel || "None"}
//                     </span>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           100% {
//             transform: translateY(-10px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import React from "react";

const TechStackVisualization = () => {
  const techStacks = {
    frontend: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        color: "#000000",
      },

      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        color: "#000000",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        color: "#3776AB",
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        color: "#DC382D",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        color: "#FFCA28",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
        color: "#3ECF8E",
      },
    ],
    cloud: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        color: "#FF9900",
      },
      {
        name: "Google Cloud",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        color: "#4285F4",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        color: "#2496ED",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        color: "#000000",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        color: "#181717",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        color: "#007ACC",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        color: "#646CFF",
      },
    ],
  };

  const allTechs = [
    ...techStacks.frontend,
    ...techStacks.backend,
    ...techStacks.database,
    ...techStacks.cloud,
    ...techStacks.tools,
  ];

  return (
    <div className="min-h-screen p-2 sm:p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
          Technical Expertise
        </h3>
        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {Object.entries(techStacks)
            .slice(0, 4)
            .map(([category, techs]) => (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6 capitalize flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {techs.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6"
                          style={{
                            filter:
                              "drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))",
                          }}
                        />
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Development Tools */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Development Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStacks.tools.map((tool, index) => (
              <div
                key={tool.name}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer hover:bg-white/10"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-5 h-5"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))",
                  }}
                />
                <span className="text-gray-300 text-sm hover:text-white transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-slow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.8);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 25s linear infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TechStackVisualization;
