import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import "../CSS/Header.css";
import {
    greeting,
    workExperiences,
    skillsSection
} from "../Portfolio";

export default function Header() {
    const viewExperience = workExperiences.display;
    const viewSkills = skillsSection.display;

    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [scrolled]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isMobileView = windowWidth <= 768;

    const headerStyle = {
        backgroundColor: isMenuOpen && isMobileView ? '#ffffff' : (scrolled ? 'rgb(1 17 26 / 0%)' : 'transparent'),
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'background-color 300ms ease-in-out'
    };

    return (
        <Headroom>
            <header className="header" style={headerStyle}>
                <a href="/" className="logo">
                    <span> &lt;</span>
                    <span className="logo-name">{greeting.username}</span>
                    <span>/&gt;</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" checked={isMenuOpen} onChange={toggleMenu} />
                <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
                    <span className="navicon"></span>
                </label>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    {viewSkills && (
                        <li>
                            <a href="#skills" onClick={toggleMenu}>Skills</a>
                        </li>
                    )}
                    {viewExperience && (
                        <li>
                            <a href="#experience" onClick={toggleMenu}>Work Experiences</a>
                        </li>
                    )}
                        <li>
                            <a href="#projects" onClick={toggleMenu}>Projects</a>
                        </li>
                    <li>
                        <a href="#Services" onClick={toggleMenu}>Services</a>
                    </li>
                    <li>
                        <a href="#resume" onClick={toggleMenu}>Resume</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleMenu}>Contact Me</a>
                    </li>
                </ul>
            </header>
        </Headroom>
    );
}