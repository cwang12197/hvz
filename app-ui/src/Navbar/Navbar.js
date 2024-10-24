import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="rules" smooth={true} duration={500}>Rules</Link>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="generalRules" smooth={true} duration={500}>
                                    General Rules
                                </Link>
                            </li>
                            <li>
                                <Link to="specificRules" smooth={true} duration={500}>
                                    Specific Rules
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li><Link to="safe-zones" smooth={true} duration={500}>Safe Zones</Link></li>
                <li><Link to="points" smooth={true} duration={500}>Points</Link></li>
                <li><Link to="population-list" smooth={true} duration={500}>Population List</Link></li>
                <li><Link to="graveyard" smooth={true} duration={500}>Graveyard</Link></li>
                <li><Link to="kill-report-form" smooth={true} duration={500}>Kill Report Form</Link></li>
                <li><Link to="quest-list" smooth={true} duration={500}>Quest List</Link></li>
                <li><Link to="quest-form" smooth={true} duration={500}>Quest Form</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
