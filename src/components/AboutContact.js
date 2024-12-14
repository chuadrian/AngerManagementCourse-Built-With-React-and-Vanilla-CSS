import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const AboutContact = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`about-contact-container ${isVisible ? 'visible' : ''}`}>
      <div className="about-contact-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="tab-buttons">
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </div>

        <div className="content">
          {activeSection === 'about' && (
            <div className="about-section">
              <h2>About MindfulMend</h2>
              <p>
                MindfulMend is a revolutionary anger management platform designed to help individuals
                transform their relationship with anger. Our comprehensive course combines
                cutting-edge psychological research with practical, easy-to-apply techniques.
              </p>
              <div className="feature-grid">
                <div className="feature">
                  <h3>Science-Backed Approach</h3>
                  <p>Our methods are grounded in cognitive-behavioral therapy and mindfulness practices.</p>
                </div>
                <div className="feature">
                  <h3>Interactive Learning</h3>
                  <p>Engage with our course through dynamic exercises and real-time feedback.</p>
                </div>
                <div className="feature">
                  <h3>Personalized Experience</h3>
                  <p>Tailored content that adapts to your unique anger triggers and responses.</p>
                </div>
                <div className="feature">
                  <h3>Progress Tracking</h3>
                  <p>Monitor your journey with detailed analytics and milestone celebrations.</p>
                </div>
              </div>
              <div className="team-section">
                <h3>Our Team</h3>
                <div className="team-members">
                  <div className="team-member">
                    <img src="/placeholder.svg?height=100&width=100" alt="unknown" />
                    <h4>Adrian Chukwuji</h4>
                    <p>Project Psychologist</p>
                  </div>
                  <div className="team-member">
                    <img src="/placeholder.svg?height=100&width=100" alt="unknown" />
                    <h4>Adrian Chukwuji</h4>
                    <p>Mood Expert</p>
                  </div>
                  <div className="team-member">
                    <img src="/placeholder.svg?height=100&width=100" alt="unknown" />
                    <h4>Adrian Chukwuji</h4>
                    <p>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="contact-section">
              <h2>Get in Touch</h2>
              <p>
                We're here to support you on your journey to better anger management. Reach out to us
                with any questions, concerns, or feedback.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={24} />
                  <a href="mailto:chuadrian243@gmail.com">chuadrian243@gmail.com</a>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <a href="tel:+2349035952141">+2349035952141</a>
                </div>
                <div className="contact-item">
                  <MapPin size={24} />
                  <address>Somewhere In On Earth</address>
                </div>
              </div>
              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
              <div className="social-links">
                <a href="https://github.com/mindfulmend" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/company/mindfulmend" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutContact;

