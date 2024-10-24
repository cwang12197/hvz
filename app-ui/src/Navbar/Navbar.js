// src/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="rules" smooth={true} duration={500}>
            Rules
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Safe Zones
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Points
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Population List
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Graveyard
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Kill Report Form
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Quest List
          </Link>
        </li>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Quest Form
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
