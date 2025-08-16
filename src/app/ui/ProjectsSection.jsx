"use client";
import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Palette,
  Globe,
  Smartphone,
  Database,
  ArrowRight,
  Eye,
} from "lucide-react";

const ProjectsSection = function () {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Copywrite OCR",
      description:
        "CopyWrite is a next-generation SaaS that goes far beyond traditional OCR. It doesn’t just convert handwriting to text — it recreates the original document with full formatting, colours, tables, and structure intact.The platform features an in-browser document editor with capabilities rivaling Microsoft Word for text documents and Excel",

      image: "/copywrite-overview.png",
      category: "Full Stack",
      tags: [
        "React",
        "NextJs",
        "Tailwind",
        "React Query",
        "Node.js",
        "Python",
        "MongoDB",
        "Docker",
        "Aws",
        "OpenAi",
        "OnlyOffice",
        "Stripe",
        "and more...",
      ],
      liveUrl: "https://www.copywritee.com/",
      githubUrl: "https://github.com/Dalu-Atu/Copywrite",
      featured: true,
      stats: {
        views: "15K+",
        likes: "240+",
        duration: "2 months",
      },
    },
    {
      id: 2,
      title: "Hybrid School Management Site",
      description:
        "Actively serving 600+ users, Future School is a modern school SaaS platform that combines a public-facing school website with a secure, fully functional school portal. designed for schools stunning online presence and streamlined academic management, all in one hybrid web + app solution.",
      image: "/school-mobile.png",
      category: "Full Stack",
      tags: [
        "React",
        "Styled component",
        "React Query",
        "Redux",
        "NodeJs",
        "Express",
        "Supabase",
        "Vercel",
      ],
      liveUrl: "https://orueseinternationalschool.com/",
      githubUrl: "https://github.com/Dalu-Atu/future-school",
      featured: true,
      stats: {
        views: "8K+",
        likes: "180+",
        duration: "2 months",
      },
    },
    {
      id: 3,
      title: "NextWave Entertainment",
      description:
        "Never hunt for movies across multiple sites again. Automated platform that gathers ALL latest movies in one place. Free streaming + offline downloads of any movies or series with zero hassle.",
      image: "/movie-site.jpeg",
      category: "Full Stack",
      tags: [
        "React",
        "Styled Components",
        "Redux",
        "React Query",
        "NodeJs",
        "Express",
        "Puppeteer",
        "Tmdb",
        "Mongodb",
      ],
      liveUrl: "https://nextwave-one.vercel.app/",
      githubUrl: "https://github.com/Dalu-Atu/Project-Nextwave",
      featured: false,
      stats: {
        views: "5K+",
        likes: "120+",
        duration: "1 month+",
      },
    },
    {
      id: 4,
      title: "Gbugbemigentle Construction ",
      description:
        "Gbugbemi Construction Leading Nigerian construction company specializing in infrastructure development, road construction, and industrial projects. Building Nigeria's future with modern equipment and professional expertise.",
      image: "/construction.jpeg",
      category: "Frontend",
      tags: ["React", "Tailwind", "Framer Motion", "Vite", "Vercel"],
      liveUrl: "https://www.gbubemigentleconstruction.com/",
      githubUrl: "https://github.com/Dalu-Atu/Gbugbemi-Construction",
      featured: true,
      stats: {
        views: "12K+",
        likes: "300+",
        duration: "1 month",
      },
    },
    {
      id: 5,
      title: "Project Safe-Pass",
      description:
        " Crypto & Banking Simulation - Safe Pass: A fun, educational banking & cryptocurrency simulation app that mimics deposits, withdrawals, transfers, and support requests — no real money involved.",
      image: "/bank.png",
      category: "Frontend / Api",
      tags: [
        "React",
        "Tailwind",
        "Recharts",
        "ReactQuery",
        "Json",
        "coingecko",
        "Supabase",
      ],
      liveUrl: "https://safe-pass-eta.vercel.app/",
      githubUrl: "https://github.com/Dalu-Atu/safe-pass/",
      featured: false,
      stats: {
        views: "9K+",
        likes: "160+",
        duration: "1 months",
      },
    },
    {
      id: 6,
      title: "Amazon Aura",
      description:
        "AmazonAura is a smart deal aggregation platform that helps users find the best daily discounts on Amazon in real time. Using web scraping and automation, it curates top deals across various categories, ensuring users never miss out on savings.",
      image: "/amazonaura.PNG",
      category: "Mobile",
      tags: ["Html", "Css", "Javascript", "Web Scraping", "Amazon"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      stats: {
        views: "6K+",
        likes: "140+",
        duration: "1 months",
      },
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return <Globe size={16} />;
      case "Frontend":
        return <Palette size={16} />;
      case "Backend":
        return <Database size={16} />;
      case "Mobile":
        return <Smartphone size={16} />;
      default:
        return <Code size={16} />;
    }
  };

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
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes projectSlideUp {
            from { 
              opacity: 0; 
              transform: translateY(40px) scale(0.95); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }
          
          @keyframes imageParallax {
            from { transform: scale(1.1); }
            to { transform: scale(1); }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
          }
          
          .animate-slideInLeft {
            animation: slideInLeft 1s ease-out;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-glow {
            animation: glow 4s ease-in-out infinite;
          }
          
          .animate-project-slide {
            animation: projectSlideUp 0.8s ease-out forwards;
          }
          
          .animate-project-slide-1 {
            animation: projectSlideUp 0.8s ease-out 0.1s both;
          }
          
          .animate-project-slide-2 {
            animation: projectSlideUp 0.8s ease-out 0.2s both;
          }
          
          .animate-project-slide-3 {
            animation: projectSlideUp 0.8s ease-out 0.3s both;
          }
          
          .animate-project-slide-4 {
            animation: projectSlideUp 0.8s ease-out 0.4s both;
          }
          
          .animate-project-slide-5 {
            animation: projectSlideUp 0.8s ease-out 0.5s both;
          }
          
          .animate-project-slide-6 {
            animation: projectSlideUp 0.8s ease-out 0.6s both;
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
          
          .project-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .project-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          .project-image {
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .project-card:hover .project-image {
            transform: scale(1.05);
          }
          
          .category-filter {
            transition: all 0.3s ease;
          }
          
          .category-filter.active {
            background: linear-gradient(135deg, #3b82f6, #06b6d4);
            color: white;
          }
          
          .tag-pill {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.3);
            transition: all 0.3s ease;
          }
          
          .tag-pill:hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
          }
          
          .featured-badge {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            animation: float 3s ease-in-out infinite;
          }
        `,
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.03] bg-blue-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.03] bg-purple-500"></div>
      </div>

      <section id="projects" className=" px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-slate-600/30 border border-slate-600/50 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Code className="text-blue-400" size={18} />
              <span>My Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text tracking-tight">
              Featured <span className="gradient-text-highlight">Projects</span>
            </h2>
            <p className="text-l text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring full-stack applications,
              frontend designs, and innovative solutions built with modern
              technologies.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slideInLeft">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`category-filter px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 ${
                  activeFilter === category
                    ? "active"
                    : "bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
                {category !== "All" && (
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {projects.filter((p) => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card glass-card rounded-2xl overflow-hidden relative group animate-project-slide-${
                  index + 1
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="featured-badge absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white">
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    className="project-image w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
                  />
                  <div className="text-6xl text-slate-600">
                    {getCategoryIcon(project.category)}
                  </div>

                  {/* Overlay with action buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                    <button className="bg-blue-500/80 backdrop-blur-sm p-3 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                      <Eye size={18} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category & Stats */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-blue-400">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {project.stats.duration}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tag-pill px-3 py-1 rounded-full text-xs font-medium text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {project.stats.views}
                      </span>
                      <span className="flex items-center gap-1">
                        ❤️ {project.stats.likes}
                      </span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
