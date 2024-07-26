import React from "react";
import "../CSS/Greeting.css";
import SocialMedia from "../Components/SocialMedia";
import { greeting } from "../Portfolio";

export default function Greeting() {
    if (!greeting.displayGreeting) {
        return null;
    }
    
    return (
        <div className="main_h">
            <div className="overlayX"></div>
            <div className="header-contentX containerX">
                <h1 className="header-titleX">
                    <span className="upX">Hi!</span>
                    <span className="downX">{greeting.title}</span>
                </h1>
                <p className="header-subtitleX">{greeting.subTitle}</p>
                <SocialMedia />
            </div>
            <button id="backToTopButton" onClick={() => {
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                });
            }}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
}