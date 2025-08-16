"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Clock,
  MessageCircle,
  User,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Calendar,
  Coffee,
} from "lucide-react";

const ContactSection = function () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "web-development",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "web-development",
        budget: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "danieelatu@gmail.com",
      link: "mailto:danieelatu@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (808) 977-2013",
      link: "tel:+2348089772013",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sapele, Delta State, Nigeria",
      link: null,
      color: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Dalu-Atu/",
      color: "hover:text-gray-400",
      followers: "1.2K",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/dalu-atu",
      color: "hover:text-blue-500",
      followers: "3.5K",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "",
      color: "hover:text-sky-400",
      followers: "892",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "",
      color: "hover:text-pink-400",
      followers: "1.8K",
    },
  ];

  const projectTypes = [
    { value: "web-development", label: "Web Development" },
    { value: "web-app", label: "Web App" },
    { value: "web-design", label: "Web Design" },
    { value: "consulting", label: "Consulting" },
    { value: "other", label: "Other" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white relative overflow-hidden"
    >
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
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
            40%, 43% { transform: translateY(-10px); }
            70% { transform: translateY(-5px); }
          }
          
          @keyframes socialFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(2deg); }
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
          
          .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
          
          .animate-bounce-slow {
            animation: bounce 2s infinite;
          }
          
          .animate-social-float {
            animation: socialFloat 4s ease-in-out infinite;
          }
          
          .animate-social-float-delayed {
            animation: socialFloat 4s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .animate-social-float-delayed-2 {
            animation: socialFloat 4s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-social-float-delayed-3 {
            animation: socialFloat 4s ease-in-out infinite;
            animation-delay: 3s;
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
          
          .form-input {
            background: rgba(51, 65, 85, 0.3);
            border: 1px solid rgba(71, 85, 105, 0.5);
            transition: all 0.3s ease;
          }
          
          .form-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            background: rgba(51, 65, 85, 0.5);
          }
          
          .submit-button {
            background: linear-gradient(135deg, #3b82f6, #06b6d4);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .submit-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #2563eb, #0891b2);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          }
          
          .submit-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          .contact-info-card {
            transition: all 0.3s ease;
          }
          
          .contact-info-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
          
          .social-link {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .social-link:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }
          
          .success-checkmark {
            background: linear-gradient(135deg, #10b981, #059669);
            animation: bounce 1s ease-in-out;
          }
          
          .loading-spinner {
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid #ffffff;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
          }
        `,
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.03] bg-blue-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.03] bg-purple-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.02] bg-gradient-to-br from-cyan-500 to-blue-500"></div>
      </div>

      <section className="py-24 px-5 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-slate-600/30 border border-slate-600/50 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <MessageCircle className="text-blue-400" size={18} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text tracking-tight">
              Let's Work{" "}
              <span className="gradient-text-highlight">Together</span>
            </h2>
            <p className="text-l text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's create something amazing together.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slideInLeft">
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="shimmer absolute inset-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Send className="text-blue-400" size={24} />
                    Send Me a Message
                  </h3>

                  <form className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-400"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Project Type and Budget Row */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-3 rounded-xl text-white"
                        >
                          {projectTypes.map((type) => (
                            <option
                              key={type.value}
                              value={type.value}
                              className="bg-slate-800"
                            >
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-400"
                        placeholder="Project Discussion"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="form-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-400 resize-none"
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || isSubmitted}
                      className=" bg-blue-500  w-full px-8 py-4 rounded-xl font-semibold text-white cursor-pointer flex items-center justify-center gap-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner"></div>
                          <span>Sending...</span>
                        </>
                      ) : isSubmitted ? (
                        <>
                          <div className="success-checkmark w-6 h-6 rounded-full flex items-center justify-center">
                            <CheckCircle size={16} />
                          </div>
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8 animate-slideInRight">
              {/* Contact Info */}
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className="shimmer absolute inset-0"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div
                          key={index}
                          className="contact-info-card flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/30 transition-all duration-300"
                        >
                          <div
                            className={`${info.color} p-2 rounded-lg bg-slate-800/50`}
                          >
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <div className="text-sm text-slate-400">
                              {info.label}
                            </div>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-white hover:text-blue-400 transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <div className="text-white font-medium">
                                {info.value}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className="shimmer absolute inset-0"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Follow Me
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      const animationClass = [
                        "animate-social-float",
                        "animate-social-float-delayed",
                        "animate-social-float-delayed-2",
                        "animate-social-float-delayed-3",
                      ][index];

                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`social-link glass-card p-4 rounded-xl text-center group ${animationClass}`}
                        >
                          <IconComponent
                            size={24}
                            className={`mx-auto mb-2 text-slate-400 group-hover:text-white transition-colors ${social.color}`}
                          />
                          <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                            {social.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {/* {social.followers} */}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fadeInUp">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden max-w-3xl mx-auto">
              <div className="shimmer absolute inset-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Ready to Start Your Project?
                </h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Whether you need a complete web application, landing page, or
                  a developer to join your team, then look no further I'm here
                  to help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-blue-500 border-none px-8 py-4 rounded-xl font-semibold text-white cursor-pointer flex items-center gap-2 justify-center transition-all duration-300 text-lg hover:from-blue-600 hover:to-purple-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
                    onClick={() =>
                      window.open(
                        "https://wa.me/2348089772013?text=Hi! I would like to schedule a call to discuss my project. When would be a good time for you?",
                        "_blank"
                      )
                    }
                  >
                    <Calendar size={20} />
                    <span>Schedule a Call</span>
                  </button>
                  <button
                    className="border border-slate-600 bg-transparent px-8 py-4 rounded-xl font-semibold text-white cursor-pointer flex items-center gap-2 justify-center transition-all duration-300 hover:bg-slate-800 hover:border-slate-500"
                    onClick={() =>
                      window.open(
                        "https://wa.me/2348089772013?text=Hello! I have a quick question about your services. Are you available for a brief chat?",
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle size={20} />
                    <span>Quick Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
