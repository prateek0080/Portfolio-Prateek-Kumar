import React, { useState } from "react";
import { RiPhoneFill } from "react-icons/ri";
import { RiMailOpenFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's discuss your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div className="contact-links">
              <a
                href="mailto:prateekkumar0080@gmail.com"
                className="contact-link"
              >
                <span className="icon">
                  <RiMailOpenFill />
                </span>
                <span>prateekkumar0080@gmail.com</span>
              </a>
              <a href="tel:+91 8507901395" className="contact-link">
                <span className="icon">
                  <RiPhoneFill />
                </span>
                <span>+91 8507901395</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prateek850/"
                className="contact-link"
              >
                <span className="icon">
                  <RiLinkedinBoxFill />
                </span>
                <span>prateek850</span>
              </a>

              <a href="https://github.com/prateek0080" className="contact-link">
                <span className="icon">
                  <RiGithubFill />
                </span>

                <span>prateek0080</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
