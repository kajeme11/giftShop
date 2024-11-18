import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import "./NavbarSection.css";


export const NavbarSections = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="nav-bar-container">
            <nav className="nav-bar">
            <div>
                <NavLink className="logo" to="/">Hair By Anita</NavLink>
                <p className="contact-details">(415)-254-8229</p>
                <p className="contact-details">234 West Portal Ave</p>
                <p className="contact-details">San Francisco, CA 94127</p>
            </div>
            <div className="menu" onClick={ () => {setMenuOpen(!menuOpen)} }>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li className="link link-home">
                        <NavLink  className="title"  to="/">Home</NavLink>
                    </li>
                    <li className="link link-services">
                        <NavLink className="title"  to="/services">Services</NavLink>
                    </li>
                    <li className="link link-gallery">
                        <NavLink className="title"  to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="link link-contact">
                        <NavLink className="title"  to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};