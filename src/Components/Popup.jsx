import React, { useEffect } from 'react';
import "../CSS/Popup.css";

export default function Popup({ isOpen, handleClose, content }) {
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = (event) => {
            // Get the popup element
            const popup = document.querySelector('.popup-box .box');

            // Check if the scroll event happened outside the popup
            if (popup && !popup.contains(event.target)) {
                handleClose();
            }
        };

        // Add scroll event listener when the popup is open
        if (isOpen) {
            document.addEventListener('scroll', handleScroll);
        }

        // Clean up the scroll event listener when component unmounts or popup closes
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen, handleClose]);

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                {content}
            </div>
        </div>
    );
}
