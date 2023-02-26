import React from 'react';
import Home from "./pages/home.js";
import Bios from "./pages/bios.js";
import About from "./pages/about.js";
import Everyone from "./pages/everyone.js";
import NotFound from "./pages/notfound.js";
import Service from "./pages/service.js";
import Services from './pages/services.js';


//Logos are sourced from --> https://uxwing.com/tag/social-media-icons/
import fb from "./images/icons/fb.png";
import twitter from "./images/icons/twitter.png";
import insta from "./images/icons/insta.png";
import mail from "./images/icons/mail.png"

//Styling
import "./style/app.scss";
import "./style/header.scss"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './style/navigation.css';

export default function Navigation() {

  return (
    <>
      <div className={`navbar`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="services-link">
             <Link to="/Services">Services</Link>     

                <ul className="services-dropdown">
                  <li><Link to="/services/0">Weddings</Link></li>
                  <li><Link to="/services/1">Karaoke</Link></li>
                  <li><Link to="/services/2">DS</Link></li>
                  <li><Link to="/services/3">Corporation</Link></li>
                  <li><Link to="/services/4">Events</Link></li>
                  <li><Link to="/services/5">Parties</Link></li>
                </ul>
          </li>
          <li className="services-link">
              <Link to="/Bios">Bios</Link>     
                <ul className="services-dropdown">
                  <li><Link to="/Bios/0">James</Link></li>
                  <li><Link to="/Bios/1">Jeremy</Link></li>
                  <li><Link to="/Bios/2">Zach</Link></li>
                  <li><Link to="/Bios/3">Danny</Link></li>
                  <li><Link to="/Bios/4">Jarelle</Link></li>
                  <li><Link to="/Bios/5">Rachelle</Link></li>
                  <li><Link to="/Bios/6">Bill</Link></li>
                  <li><Link to="/Bios/7">Jerm</Link></li>
                  <li><Link to="/Bios/8">Shaina</Link></li>
                  <li><Link to="/Bios/9">Darrell</Link></li>
                </ul>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <div className='social-media-container'>
            <div >
              <a className="logo" href={"https://www.facebook.com/carekaraoke"}>
                <img alt="facebook" src={fb} /> 
              </a>
              <a className="logo" href={"https://twitter.com/CareKaraoke"}>
                <img alt="twitter" src={twitter} /> 
              </a>
              <a className='logo' href={"https://www.instagram.com/carekaraoke/"}>
                <img alt="insta" src={insta} /> 
              </a>
              <a className='logo' href={"mailto:carekaraoke20@gmail.com"}>
                <img alt="mail" src={mail} /> 
              </a>
            </div>
            <div>
              <h3>847-209-0823</h3>
            </div>
          </div>
        </ul>
      </div>
      <div className="tabcontent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<Service />} />
          <Route path="/bios/:id" element={<Bios />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/bios" element={<Everyone />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
