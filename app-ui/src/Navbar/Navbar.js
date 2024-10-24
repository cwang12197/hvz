import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isRuleDropdownOpen, setRuleIsDropdownOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handle scroll to show the navbar after scrolling 50px
    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${showNavbar ? 'show' : 'hidden'}`}>
            <div className="navbar-container">
                <img
                    src={isMenuOpen ? "/close.svg" : "/burgermenu.svg"}
                    alt="Menu"
                    className="burger-icon"
                    onClick={toggleMenu}
                />
                {isMenuOpen && (
                    <ul className="navbar-links">
                        <li onClick={toggleMenu}>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li 
                            className="dropdown-container"
                            onMouseEnter={() => setRuleIsDropdownOpen(true)}
                            onMouseLeave={() => setRuleIsDropdownOpen(false)}
                        >
                            <Link to="rules" smooth={true} duration={500}>Rules</Link>
                            {isRuleDropdownOpen && (
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

                        <li onClick={toggleMenu}>
                            <Link to="safe-zones" smooth={true} duration={500}>Safe Zones</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="points" smooth={true} duration={500}>Points</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="population-list" smooth={true} duration={500}>Population List</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="graveyard" smooth={true} duration={500}>Graveyard</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="kill-report-form" smooth={true} duration={500}>Kill Report Form</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="quest-list" smooth={true} duration={500}>Quest List</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="quest-form" smooth={true} duration={500}>Quest Form</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
