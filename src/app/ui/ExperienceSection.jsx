"use client";
import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Building,
  CheckCircle,
} from "lucide-react";

const ExperienceSection = function () {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer / IT Manager",
      company: "Oruese International School",
      location: "Sapele, Delta State",
      period: "2023 - 2025",
      type: "Part-Time",
      current: false,
      description:
        "Lead development of scalable web applications serving 600+ Monthly users. Training and Mentoring Senior Secondary School students in programming and best practices for code quality and performance.",
      achievements: [
        "Built a school management system, Serving 600+ Students monthly, automating score entry and result processing, reducing manual work by 60%.",
        "Optimized application performance, reducing load time by 40%, resulting in faster access for teachers and students.",
        "Mentored senior secondary students in modern web development practices, boosting technical skills.",
        "Guided students in building real-world projects to strengthen practical skills",
      ],
      technologies: [
        "React",
        "Styled-components",
        "ReactQuery",
        "Node.js",
        "ExpressJs",
        "Supabase",
      ],
      highlights: {
        impact: "Reduced Manual work by 60%",
        Trained: "Trained 90+ Students",
        scale: "600+ Monthly Users",
      },
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Gbugbemigentle Construction",
      location: "Remote",
      period: "2025",
      type: "Contract",
      current: false,
      description:
        "Built a modern, SEO friendly, responsive landing page that improved brand trust and enabled direct customer inquiries for a construction company.",
      achievements: [
        "Delivered a modern, mobile-friendly landing page that enhanced brand visibility and trust",
        "Implemented direct contact features, allowing visitors to reach the company via forms or messages",
        "Optimized SEO to improve search rankings and organic reach",
        "Ensured fast load times and responsive design for better user experience",
      ],
      technologies: ["React", "TailwindCSS", "Vercel"],
      highlights: {
        impact: "Increased brand visibility and client inquiries",
        engagement: "Enabled direct customer communication",
        performance: "Fast, SEO-optimized landing page",
      },
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Sapele Vocational Centre",
      location: "Part-Time",
      period: "2024",
      type: "Enterprise Solution",
      current: false,
      description:
        "Developed Copywrite, a handwriting-to-digital platform that accurately converts handwritten notes and tables into editable documents, saving hours of manual typing and improving efficiency.",
      achievements: [
        "Built OCR/ICR pipeline to convert handwritten notes into fully formatted digital documents",
        "Intergrated a Word-like editor for online document editing",
        "Converted handwritten tables into Excel spreadsheets with full editing ",
        "Enabled multi-format export (DOCX, PDF, XLSX, and more)",
        "Implemented secure authentication and cloud-based document storage",
        "Saving Time and energy for school and offices that manually spend 12+ hours weekly typing handwritten documents",
      ],
      technologies: [
        "React",
        "NextJs",
        "Tailwindcss",
        "Redux",
        "ReactQuery",
        "Node.js",
        "Express",
        "OpenAi",
        "GeminiAI",
        "MongoDB",
        "Vercel",
        "Aws",
        "GCP",
        "OnlyOffice",
        "Docker",
      ],
      highlights: {
        Accuracy: "97% Transcription accuracy",
        usability: "Word/Excel-like editors",
        formats: "20+ export options",
        impact: "12+ hours saved weekly",
      },
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Sapele Tech Bootcamp",
      location: "Sapele, Nigeria",
      period: "2022",
      gpa: null,
      description:
        "Hands-on bootcamp focused on modern web technologies, project-based learning, and real-world application development.",
      achievements: [
        "Completed intensive training in JavaScript, React, Node.js, and MongoDB",
        "Built multiple full-stack projects during the program",
        "Collaborated on team projects simulating real client requirements",
      ],
      coursework: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      degree: "Self-Taught Developer",
      institution: "Udemy & Online Resources",
      location: "Remote",
      period: "Ongoing",
      gpa: null,
      description:
        "Continually learning through online courses and real-world projects to stay updated with modern web technologies.",
      achievements: [
        "Completed advanced MERN stack and API development courses on Udemy",
        "Built and deployed multiple production-grade applications for clients and personal projects",
        "Learned authentication, payment integration, and performance optimization techniques",
      ],
      coursework: [
        "MERN Stack",
        "API Development",
        "Advanced JavaScript",
        "UI/UX Best Practices",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "MERN Stack Mastery",
      issuer: "Udemy",
      date: "2022",
      credentialId: null,
      description:
        "Comprehensive course covering full-stack development with MongoDB, Express, React, and Node.js.",
      skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      issuer: "Udemy",
      date: "2022 - 2023",
      credentialId: null,
      description:
        "In-depth course focusing on advanced JavaScript features, asynchronous programming, and performance optimization.",
      skills: [
        "JavaScript ES6+",
        "Async/Await",
        "Closures",
        "Performance Optimization",
      ],
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      issuer: "CS50",
      date: "2023 - 2024",
      credentialId: null,
      description:
        "Learned essential data structures and algorithms to improve problem-solving and coding efficiency.",
      skills: [
        "Arrays",
        "Linked Lists",
        "Trees",
        "Sorting",
        "Searching",
        "Recursion",
      ],
    },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "experience":
        return experiences;
      case "education":
        return education;
      case "certifications":
        return certifications;
      default:
        return experiences;
    }
  };

  const getTabIcon = (tab) => {
    switch (tab) {
      case "experience":
        return <Briefcase size={18} />;
      case "education":
        return <GraduationCap size={18} />;
      case "certifications":
        return <Award size={18} />;
      default:
        return <Briefcase size={18} />;
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
          
          @keyframes timelineFade {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes timelineSlide {
            from { 
              opacity: 0; 
              transform: translateX(-30px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes lineGrow {
            from { height: 0%; }
            to { height: 100%; }
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
          
          .animate-timeline-fade {
            animation: timelineFade 0.8s ease-out forwards;
          }
          
          .animate-timeline-slide {
            animation: timelineSlide 0.8s ease-out forwards;
          }
          
          .animate-timeline-1 {
            animation: timelineFade 0.8s ease-out 0.1s both;
          }
          
          .animate-timeline-2 {
            animation: timelineFade 0.8s ease-out 0.2s both;
          }
          
          .animate-timeline-3 {
            animation: timelineFade 0.8s ease-out 0.3s both;
          }
          
          .animate-timeline-4 {
            animation: timelineFade 0.8s ease-out 0.4s both;
          }
          
          .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
          }
          
          .animate-line-grow {
            animation: lineGrow 2s ease-out forwards;
            animation-delay: 0.5s;
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
          
          .timeline-line {
            background: linear-gradient(to bottom, #3b82f6, #06b6d4);
            width: 2px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
          }
          
          .timeline-node {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 16px;
            height: 16px;
            background: linear-gradient(135deg, #3b82f6, #06b6d4);
            border: 4px solid #0f172a;
            border-radius: 50%;
            z-index: 10;
          }
          
          .timeline-node.current {
            animation: pulse 2s ease-in-out infinite;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          
          .tab-button {
            transition: all 0.3s ease;
            position: relative;
          }
          
          .tab-button.active {
            background: linear-gradient(135deg, #3b82f6, #06b6d4);
            color: white;
          }
          
          .tab-button:not(.active):hover {
            background: rgba(71, 85, 105, 0.3);
            color: white;
          }
          
          .experience-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .experience-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
          
          .tech-tag {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.3);
            transition: all 0.3s ease;
          }
          
          .tech-tag:hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            transform: translateY(-1px);
          }
          
          .highlight-stat {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
            border: 1px solid rgba(59, 130, 246, 0.3);
          }
        `,
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.03] bg-blue-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.03] bg-purple-500"></div>
      </div>

      <section className="py-15 px-5 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-slate-600/30 border border-slate-600/50 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <TrendingUp className="text-blue-400" size={18} />
              <span>My Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text tracking-tight">
              Experience &{" "}
              <span className="gradient-text-highlight">Growth</span>
            </h2>
            <p className="text-l text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive look at my professional journey, education, and
              continuous learning in the world of technology.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slideInLeft">
            {["experience", "education", "certifications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 capitalize ${
                  activeTab === tab
                    ? "active"
                    : "bg-slate-800/50 border border-slate-700/50 text-slate-300"
                }`}
              >
                {getTabIcon(tab)}
                <span>{tab}</span>
              </button>
            ))}
          </div>

          {/* Content Based on Active Tab */}
          <div className="relative">
            {activeTab === "experience" && (
              <div className="relative">
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className={`relative animate-timeline-${index + 1}`}
                    >
                      {/* Timeline Node */}
                      <div
                        className={`timeline-node ${
                          exp.current ? "current" : ""
                        }`}
                      ></div>

                      {/* Experience Card */}
                      <div
                        className={`experience-card glass-card p-8 rounded-2xl relative overflow-hidden ml-0 ${
                          index % 2 === 0
                            ? "md:ml-8 md:mr-8"
                            : "md:ml-8 md:mr-8"
                        }`}
                      >
                        <div className="shimmer absolute inset-0"></div>
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                {exp.title}
                                {exp.current && (
                                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium animate-pulse-slow">
                                    Current
                                  </span>
                                )}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-400">
                                <div className="flex items-center gap-2">
                                  <Building size={16} />
                                  <span className="font-medium text-blue-400">
                                    {exp.company}
                                  </span>
                                </div>
                                <span className="hidden sm:inline">•</span>
                                <div className="flex items-center gap-2">
                                  <MapPin size={16} />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                              <div className="flex items-center gap-2 text-slate-400">
                                <Calendar size={16} />
                                <span>{exp.period}</span>
                              </div>
                              <span className="bg-slate-700/50 px-3 py-1 rounded-full text-xs text-slate-300">
                                {exp.type}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-slate-300 leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          {/* Highlights */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {Object.entries(exp.highlights).map(
                              ([key, value], idx) => (
                                <div
                                  key={idx}
                                  className="highlight-stat p-4 rounded-xl text-center"
                                >
                                  <div className="text-lg font-bold text-white mb-1">
                                    {value}
                                  </div>
                                  <div className="text-xs text-slate-400 capitalize">
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                          </div>

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-4">
                              Key Achievements
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div
                                  key={achIndex}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle
                                    className="text-green-400 flex-shrink-0 mt-0.5"
                                    size={16}
                                  />
                                  <span className="text-slate-300 text-sm leading-relaxed">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="tech-tag px-3 py-1 rounded-full text-sm text-blue-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className={`experience-card glass-card p-8 rounded-2xl relative overflow-hidden animate-timeline-${
                      index + 1
                    }`}
                  >
                    <div className="shimmer absolute inset-0"></div>
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-400">
                            <div className="flex items-center gap-2">
                              <GraduationCap size={16} />
                              <span className="font-medium text-blue-400">
                                {edu.institution}
                              </span>
                            </div>
                            <span className="hidden sm:inline">•</span>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          {edu.gpa && (
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">
                          Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3"
                            >
                              <Star
                                className="text-yellow-400 flex-shrink-0 mt-0.5"
                                size={16}
                              />
                              <span className="text-slate-300 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Coursework */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                          Key Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="tech-tag px-3 py-1 rounded-full text-sm text-purple-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.id}
                    className={`experience-card glass-card p-6 rounded-2xl relative overflow-hidden animate-timeline-${
                      index + 1
                    }`}
                  >
                    <div className="shimmer absolute inset-0"></div>
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-3 rounded-full">
                            <Award className="text-yellow-400" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1">
                              {cert.title}
                            </h3>
                            <p className="text-blue-400 font-medium">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <span className="bg-slate-700/50 px-3 py-1 rounded-full text-xs text-slate-300">
                          {cert.date}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Skills Validated
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="tech-tag px-2 py-1 rounded-full text-xs text-green-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
