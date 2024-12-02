import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Logo from './Logo';
import AboutContact from './AboutContact';

function Navbar({ username, onQuickTherapy, onRestartCourse }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutContact, setShowAboutContact] = useState(false);

  const toggleAboutContact = () => {
    setShowAboutContact(!showAboutContact);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Logo className="logo-svg" />
            <span>MindMender</span>
          </div>
          {username && <div className="navbar-username">Welcome, {username}</div>}
          <div className="navbar-menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
          <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#" onClick={toggleAboutContact}>About</a></li>
            <li><a href="#" onClick={toggleAboutContact}>Contact</a></li>
            <li>
              <button className="quick-therapy-button" onClick={onQuickTherapy}>
                <Heart size={16} />
                <span>Quick Therapy</span>
              </button>
            </li>
            <li>
              <button className="restart-course-button" onClick={onRestartCourse}>
                Restart Course
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {showAboutContact && <AboutContact onClose={toggleAboutContact} />}
    </>
  );
}

export default Navbar;






