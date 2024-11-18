import React from 'react';
import './Footer.css';
import {FaInstagram} from 'react-icons/fa';

export const Footer = () => {
    return(
        <div className="footer">
            <h4>Follow Me On Instagram!</h4>
            <div className="inner-footer">
                <div className="icons">
                    <a href="http://www.google.com">
                        <FaInstagram  className="icon instagram"/>
                    </a>
                </div> 
            </div>
        </div>
    );
};