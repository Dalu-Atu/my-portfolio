import React from "react";
import {
  Code,
  Palette,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Award,
  Lightbulb,
  Users,
} from "lucide-react";
import TechStackVisualization from "./tech";

const AboutSection = function () {
  const skills = [
    { name: "Frontend", level: 90, color: "from-blue-500 to-cyan-400" },
    {
      name: "Backend",
      level: 80,
      color: "from-green-500 to-emerald-400",
    },
    { name: "Design", level: 85, color: "from-purple-500 to-violet-400" },
    {
      name: "DataBase",
      level: 80,
      color: "from-orange-500 to-red-400",
    },
  ];

  const highlights = [
    "Full-stack development expertise with modern frameworks",
    "Strong focus on performance optimization and SEO",
    "User-centered design approach with conversion focus",
    "Agile development and collaborative team player",
  ];

  // Professional value propositions instead of repeated achievements
  const expertise = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Modern frameworks and best practices for scalable solutions",
      color: "text-blue-400",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges",
      color: "text-yellow-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong communication and team collaboration skills",
      color: "text-green-400",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Commitment to clean code and exceptional user experiences",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.02);
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes skillFill {
          from { width: 0%; }
          to { width: var(--skill-width); }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate 20s linear infinite;
        }
        
        .animate-skill-fill {
          animation: skillFill 2s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up-1 {
          animation: slideInUp 0.8s ease-out 0.1s both;
        }
        
        .animate-slide-up-2 {
          animation: slideInUp 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up-3 {
          animation: slideInUp 0.8s ease-out 0.3s both;
        }
        
        .animate-slide-up-4 {
          animation: slideInUp 0.8s ease-out 0.4s both;
        }
        
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 2s infinite;
        }
        
        .pulse-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%);
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-text-highlight {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(51, 65, 85, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(71, 85, 105, 0.3);
        }
        
        .tech-orbit {
          position: absolute;
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50%;
        }
        
        .tech-orbit-1 {
          width: 300px;
          height: 300px;
          animation: rotate 15s linear infinite;
        }
        
        .tech-orbit-2 {
          width: 200px;
          height: 200px;
          animation: rotate 20s linear infinite reverse;
        }
        
        .tech-icon {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          border: 2px solid rgba(59, 130, 246, 0.3);
        }
        
        .tech-icon-1 {
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .tech-icon-2 {
          bottom: -20px;
          right: 50%;
          transform: translateX(50%);
        }
        
        .tech-icon-3 {
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .tech-icon-4 {
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
        }
      `,
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.03] bg-blue-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.03] bg-purple-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.02] bg-gradient-to-br from-cyan-500 to-blue-500"></div>
      </div>

      <section className="py-10 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-slate-600/30 border border-slate-600/50 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Code className="text-blue-400" size={18} />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text tracking-tight">
              Designing Experiences{" "}
              <span className="gradient-text-highlight">&</span> Delivering
              Solutions
            </h2>
            <p className="text-l text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I build digital products with users at the core. Every interface
              is thoughtfully designed for clarity, usability, and elegance,
              balancing stunning visuals with powerful functionality to solve
              real-world challenges. Explore my work below to see it in action.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center mb-24">
            {/* Left Side - About Content */}
            <div className="animate-slideInLeft">
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="shimmer absolute inset-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    My Journey
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    With over 3 years of experience in full-stack development,
                    I've evolved from a curious beginner to a seasoned developer
                    who thrives on solving complex problems. My journey began
                    with a simple "Hello World" and has led me through countless
                    late-night coding sessions, breakthrough moments, and
                    successful project deliveries.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    I specialize in the MERN stack and have a keen eye for
                    design, allowing me to build applications that not only
                    function flawlessly but also provide exceptional user
                    experiences. Every project is an opportunity to push
                    boundaries and create something remarkable.
                  </p>

                  {/* Highlights */}
                  <div className="space-y-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle
                          className="text-green-400 flex-shrink-0"
                          size={20}
                        />
                        <span className="text-slate-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Tech Visualization */}
            <div className="animate-slideInRight flex justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Tech Orbits */}
                <div className="tech-orbit tech-orbit-1">
                  <div className="tech-icon tech-icon-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                      alt="MongoDB"
                      // className="w-10 h-10 bg-white"
                    />
                  </div>
                  <div className="tech-icon tech-icon-3 overflow-hidden">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                      alt="ExpressJS"
                      className="w-10 h-10 bg-white"
                    />
                  </div>
                </div>

                <div className="tech-orbit tech-orbit-2">
                  <div className="tech-icon tech-icon-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                      alt="Nextjs"
                      // className="w-10 h-10 bg-white"
                    />
                  </div>
                  <div className="tech-icon tech-icon-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" />
                  </div>
                </div>

                {/* Center Element */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center border-2 border-blue-500/40 animate-float relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-glow">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      alt="MERN"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TechStackVisualization />
          {/* Skills Section */}
          <div className="mb-24 animate-fadeInUp">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="pulse-glow absolute inset-0"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} animate-pulse`}
                          ></div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {skill.name}
                          </h4>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-white">
                            {skill.level}%
                          </div>
                          <div className="text-xs text-slate-400">
                            {skill.level >= 90
                              ? "Expert"
                              : skill.level >= 80
                              ? "Advanced"
                              : "Intermediate"}
                          </div>
                        </div>
                      </div>

                      {/* Modern Progress Track */}
                      <div className="relative">
                        <div className="h-2 bg-slate-700/30 rounded-full overflow-hidden backdrop-blur-sm">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative animate-skill-fill transition-all duration-500 group-hover:shadow-lg`}
                            style={{
                              "--skill-width": `${skill.level}%`,
                              filter: `drop-shadow(0 0 8px ${
                                skill.color.includes("blue")
                                  ? "#3b82f6"
                                  : skill.color.includes("green")
                                  ? "#10b981"
                                  : skill.color.includes("purple")
                                  ? "#8b5cf6"
                                  : "#f59e0b"
                              }40)`,
                            }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent animate-shimmer"></div>
                          </div>
                        </div>

                        {/* Skill level markers */}
                        <div className="flex justify-between mt-2">
                          {[20, 40, 60, 80, 100].map((mark) => (
                            <div
                              key={mark}
                              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                skill.level >= mark
                                  ? `bg-gradient-to-r ${skill.color}`
                                  : "bg-slate-600/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Expertise Grid  */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              What I Bring to Your Project
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`glass-card p-6 rounded-xl text-center relative overflow-hidden animate-slide-up-${
                      index + 1
                    } hover:transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="shimmer absolute inset-0"></div>
                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-full bg-slate-800/50 mb-4 animate-float-delayed">
                        <IconComponent className={item.color} size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
