import React from "react";

import notepadImage from "../assets/images/notepad.png";
import flavorsImage from "../assets/images/flavors.png";
import atsImage from "../assets/images/ats.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Notepad Clone",
      description:
        "A simple Java Swing clock application that displays the current time in a GUI. The `Main` class launches the app, and `MyWindow` sets up the layout with labels. A timer updates the time every second, showing hours, minutes, seconds, and AM/PM, demonstrating basic Java GUI and real-time clock functionality.",
      image: notepadImage,
      technologies: ["Java", "Swing"],
      liveUrl: "",
      githubUrl: "https://github.com/prateek0080/notepad-clone.git",
    },
    {
      id: 2,
      title: "Flavors of Bharat",
      description:
        "A responsive single-page website for an authentic Indian restaurant featuring an interactive menu system, image gallery, and contact form. Built with HTML5, CSS3, JavaScript, and Bootstrap 5. Includes modern UI elements with smooth animations and mobile-friendly design.",
      image: flavorsImage,
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "https://prateek0080.github.io/Flavors-of-Bharat/",
      githubUrl: "https://github.com/prateek0080/Flavors-of-Bharat.git",
    },
    {
      id: 3,
      title: "ATS Resume Analyzer",
      description:
        "ATS Resume Analyzer is an AI-driven Streamlit app that compares resumes with job descriptions. Using Google Gemini AI, it offers detailed reviews, match percentages, and keyword analysis. Users can upload their resume, input job details, select analysis type, and download insights to improve resume alignment and job application success.",
      image: atsImage,
      technologies: ["Python", "Streamlit", "Google Gemini AI"],
      liveUrl: "",
      githubUrl: "https://github.com/prateek0080/ATS-Resume-Analyzer.git",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some of my recent works that showcase my skills</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      className="btn-icon"
                      aria-label="View Live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn-icon"
                      aria-label="View Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📁
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
