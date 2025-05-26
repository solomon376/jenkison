import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // If using React Router
// OR use regular anchor tags if it's a single-page app

export default function Header({ visitorCount, scrolled }) {
  const [activeNav, setActiveNav] = useState('#home'); // Track active nav item

  // Update active nav on click
  const handleNavClick = (hash) => {
    setActiveNav(hash);
  };

  return (
    <header className={`sticky-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? '' : 'bg-primary'}`}>
        <div className="container">
          <a className="navbar-brand" href="#home" onClick={() => handleNavClick('#home')}>
            <img src="/src/assets/images/logo.png" alt="Jenkinson Sea Life Logo" height="50" />
            <span className="visitor-counter ms-2">
              <FaUsers className="me-1" />
              {visitorCount.toLocaleString()}
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeNav === '#home' ? 'active' : ''}`}
                  href="#home"
                  onClick={() => handleNavClick('#home')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeNav === '#about' ? 'active' : ''}`}
                  href="#about"
                  onClick={() => handleNavClick('#about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeNav === '#animals' ? 'active' : ''}`}
                  href="#animals"
                  onClick={() => handleNavClick('#animals')}
                >
                  Marine Life
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeNav === '#events' ? 'active' : ''}`}
                  href="#events"
                  onClick={() => handleNavClick('#events')}
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeNav === '#gallery' ? 'active' : ''}`}
                  href="#gallery"
                  onClick={() => handleNavClick('#gallery')}
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeNav === '#reviews' ? 'active' : ''}`}
                  href="#reviews"
                  onClick={() => handleNavClick('#reviews')}
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeNav === '#contact' ? 'active' : ''}`}
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}