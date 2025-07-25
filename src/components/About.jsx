import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know more about who I am and what I do</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              My educational journey has equipped me with solid programming
              fundamentals and modern web technologies. I'm excited to apply my
              knowledge in real-world scenarios and contribute to innovative
              projects while continuously learning and growing in the field.
            </p>

            <div className="education-section">
              <h3>Education</h3>

              <div className="education-item">
                <div className="education-period">
                  <span className="years">2023 – 2025</span>
                  <span className="location">Faridabad, Haryana</span>
                </div>
                <div className="education-details">
                  <h4>Master of Computer Applications</h4>
                  <p className="institution">
                    Manav Rachna International Institute of Research and Studies
                  </p>
                  <p className="cgpa">CGPA: 8.32</p>
                </div>
              </div>

              <div className="education-item">
                <div className="education-period">
                  <span className="years">2019 – 2022</span>
                  <span className="location">Patna, Bihar</span>
                </div>
                <div className="education-details">
                  <h4>Bachelor of Computer Applications</h4>
                  <p className="institution">Patna Science College</p>
                  <p className="cgpa">CGPA: 8.71</p>
                </div>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <h3>LeetCode</h3>
                <p>50+ Questions Solved</p>
              </div>
              <div className="stat">
                <h3>GeeksforGeeks</h3>
                <p>15+ Questions Solved</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="src\assets\images\about.jpg" alt="Working" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
