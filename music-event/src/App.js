import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch
} from 'react-router-dom';
import './style/navigation.css';

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <Router>
      <div className="menu-btn-container">
        <Button variant="outline-dark" onClick={toggleNav}>
          Menu
        </Button>
      </div>
      <div className={`navbar${showNav ? ' show' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="services-link">
              Services
                <ul className="services-dropdown">
                  <li><Link to="/services/weddings">Weddings</Link></li>
                  <li><Link to="/services/karaoke">Karaoke</Link></li>
                  <li><Link to="/services/ds">DS</Link></li>
                  <li><Link to="/services/corporation">Corporation</Link></li>
                  <li><Link to="/services/events">Events</Link></li>
                  <li><Link to="/services/parties">Parties</Link></li>
                </ul>
          </li>
          <li><Link to="/bios">Bios</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </div>
    </Router>
  );
}
