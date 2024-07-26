import React from 'react';
import "../CSS/Footer.css";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
    
    return (
        <Fade bottom duration={1000} distance="5px">
            <div className="footer-div">
                <p className="footer-text">Made by YAHIA</p>
            </div>
        </Fade>
    );
}
