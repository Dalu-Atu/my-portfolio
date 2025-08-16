"use client";
import React, { useState } from "react";
import { Send, ArrowRight, Play, Star, Menu, X } from "lucide-react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";

const navItems = [
  "Services",
  "Work",
  "Solutions",
  "About",
  "Pricing",
  "Contact",
];

const heroStats = [
  { number: "20+", label: "Projects Completed" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "3+", label: "Years Experience" },
];
const HomePage = function () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.2); }
        }
        
        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-fadeInUp-delayed {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .animate-glow-fast {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-ring {
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        
        .animate-pulse-ring-1 {
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
          animation-delay: 0s;
        }
        
        .animate-pulse-ring-2 {
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
          animation-delay: 0.5s;
        }
        
        .animate-pulse-ring-3 {
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
          animation-delay: 1s;
        }
        
        .animate-pulse-ring-4 {
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
          animation-delay: 1.5s;
        }
        
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotate 15s linear infinite reverse;
        }
        
        .animate-float-particle-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .animate-float-particle-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-particle-3 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-particle-4 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
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
        
        .gradient-text-stat {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .orbital-ring::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 15px #3b82f6;
        }
        
        .orbital-ring-reverse::before {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          background: #8b5cf6;
          border-radius: 50%;
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 15px #8b5cf6;
        }
        
        .ai-container::after {
          content: "";
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          animation: glow 4s ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
          .ai-container::after {
            width: 150px;
            height: 150px;
          }
        }
      `,
        }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-600/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Daniel Atu<span className="text-blue-500">.</span>
          </div>

          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-sm font-medium text-slate-400 cursor-pointer transition-all duration-300 py-2 relative hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <button className="hidden md:flex bg-blue-500 border-none px-6 py-3 rounded-lg font-semibold text-white cursor-pointer items-center gap-2 transition-all duration-300 text-sm hover:bg-blue-600 hover:-translate-y-0.5">
            <a href="#contact">Contact Me</a>
            <Send size={16} />
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`md:hidden bg-slate-900 border-t border-slate-700 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-sm font-medium text-slate-400 cursor-pointer transition-all duration-300 hover:text-white"
              >
                {item}
              </li>
            ))}

            {/* Mobile Contact Button */}
            <button className="bg-blue-500 border-none px-6 py-3 rounded-lg font-semibold text-white cursor-pointer flex items-center gap-2 transition-all duration-300 text-sm hover:bg-blue-600">
              <span>Contact Me</span>
              <Send size={16} />
            </button>
          </ul>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-8 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('background.png')",
          }}
        ></div>

        {/* Background Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/100"></div>

        {/* Background Elements (keeping the original blur effects) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.03] bg-blue-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-[0.03] bg-violet-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] bg-gradient-to-br from-blue-500 to-violet-500"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="animate-fadeInUp text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-600/50 border border-slate-600/80 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                <Star className="text-yellow-400" size={16} />
                <span> Available for New Opportunities</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 gradient-text tracking-tight">
                Full-Stack Developer &{" "}
                <span className="gradient-text-highlight">Visual</span> Designer
              </h1>

              <p className="text-l leading-relaxed text-slate-400 mb-10 max-w-lg lg:max-w-none mx-auto lg:mx-0">
                I create user focused web applications that solve real problems
                through thoughtful design and clean code. With expertise in MERN
                STACK, SEO optimization, and conversion-focused UI/UX, I build
                solutions that not only look stunning but also rank well and
                keep users engaged.
              </p>

              <div className="flex flex-col lg:flex-row gap-4 mb-12 items-center lg:items-start">
                <button className="bg-blue-500 border-none px-8 py-4 rounded-xl font-semibold text-white cursor-pointer flex items-center gap-2 transition-all duration-300 text-lg hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30">
                  <a href="#projects">View My Work</a>
                  <ArrowRight size={20} />
                </button>
                <button className="bg-slate-600/50 border border-slate-600/80 px-8 py-4 rounded-xl font-semibold text-white cursor-pointer flex items-center gap-2 transition-all duration-300 text-lg backdrop-blur-sm hover:bg-slate-600/80 hover:-translate-y-0.5">
                  <Play size={18} />
                  <a href="/danieelatu-resume.pdf">Download Resume</a>
                </button>
              </div>

              <div className="flex gap-10 justify-center lg:justify-start">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <span className="text-4xl font-extrabold block gradient-text-stat">
                      {stat.number}
                    </span>
                    <span className="text-sm text-slate-500 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative animate-fadeInUp-delayed flex justify-center items-center">
              <div className="ai-container relative w-96 h-96 md:w-[400px] md:h-[400px] flex justify-center items-center">
                <div className="orbital-ring absolute w-[350px] h-[350px] md:w-[350px] md:h-[350px] border border-blue-500/20 rounded-full animate-rotate"></div>
                <div className="orbital-ring-reverse absolute w-80 h-80 md:w-80 md:h-80 border border-blue-500/20 rounded-full animate-rotate-reverse"></div>

                {/* Pulse Rings */}
                <div className="absolute border-2 border-blue-500/40 rounded-full animate-pulse-ring-1"></div>
                <div className="absolute border-2 border-blue-500/40 rounded-full animate-pulse-ring-2"></div>
                <div className="absolute border-2 border-blue-500/40 rounded-full animate-pulse-ring-3"></div>
                <div className="absolute border-2 border-blue-500/40 rounded-full animate-pulse-ring-4"></div>

                {/*My profile */}
                <div className="w-70 h-70 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 z-10 relative m-5 shadow-2xl border-2 border-blue-500/30 animate-float flex items-center justify-center text-6xl overflow-hidden">
                  <img src="/me.jpeg" alt="" />
                </div>

                {/* Floating particles */}
                <div className="absolute w-1 h-1 bg-blue-500/80 rounded-full top-1/5 left-[15%] animate-float-particle-1"></div>
                <div className="absolute w-1 h-1 bg-violet-500/80 rounded-full top-[30%] right-[10%] animate-float-particle-2"></div>
                <div className="absolute w-1 h-1 bg-blue-500/80 rounded-full bottom-1/4 left-1/5 animate-float-particle-3"></div>
                <div className="absolute w-1 h-1 bg-violet-500/80 rounded-full bottom-[35%] right-1/4 animate-float-particle-4"></div>

                {/* AI Badge */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-slate-800/90 border border-blue-500/30 px-6 py-2 rounded-full backdrop-blur-xl text-white text-sm font-semibold z-20">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-glow-fast"></span>
                  Daniel Atu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
