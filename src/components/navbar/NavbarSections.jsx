import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import "./NavbarSection.css";


export const NavbarSections = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="nav-bar-container">
            <nav className="nav-bar">
            <div className="">
                <NavLink className="logo" to="/">Ana's Boutique
                    <div className="sub-logo">Salud Y  Vida</div>
                <p className="contact-details">(415) 374-4707</p>
                <p className="contact-details">2437 Mission St</p>
                <p className="contact-details">San Francisco, CA</p>
                <p className="contact-details">saludyvida8602@gmail.com</p>
                </NavLink>
                
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
                        <NavLink className="title"  to="/services">Typos de Productos</NavLink>
                    </li>
                    <li className="link link-gallery">
                        <NavLink className="title"  to="/gallery">Productos</NavLink>
                    </li>
                    <li className="link link-contact">
                        <NavLink className="title"  to="/contact">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};