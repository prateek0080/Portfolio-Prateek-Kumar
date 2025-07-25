import React from "react";

const Hero = () => {
  const downloadResume = () => {
    // Create a link to download the resume from assets folder
    const a = document.createElement("a");
    a.href = "/src/assets/resume.pdf";
    a.download = "Prateek Kumar - Resume.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Prateek Kumar</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p>
              Highly motivated developer with expertise in Java, Python, and
              full-stack technologies. Skilled in creating responsive, user-
              centric frontends and efficient backends. Demonstrates strong
              problem-solving, communication, and adaptability skills, with a
              passion for delivering innovative solutions and contributing to
              impactful projects.
            </p>
            <div className="hero-actions">
              <button onClick={downloadResume} className="btn-primary">
                Download Resume
              </button>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="src\assets\images\profile-pic.jpeg" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
