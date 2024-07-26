import React, { useState, createRef } from "react";
import "../CSS/ExperienceCard.css";
import ColorThief from "colorthief";
import Popup from "./Popup";

export default function ExperienceCard({ cardInfo }) {
    const [colorArrays, setColorArrays] = useState([]);
    //give the image a reference
    const imgRef = createRef();

    // use the reference that we gave to the image to get the color of it.
    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    };

    //   take the value from "getColorArrays()" and transform it to RGB to give it the the bacground of the image
    function rgb(values) {
        return typeof values === "undefined"
            ? null
            : "rgb(" + values.join(", ") + ")";
    }

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // Determine if it's desktop view (viewport width greater than 768px)
    const isDesktopView = window.innerWidth > 768;

    return (
        <div className="experience-card">
            {/* here we set the RGB color */}
            <div style={{ background: rgb(colorArrays) }} className="experience-banner">
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                    <h5 className="experience-text-company">{cardInfo.company}</h5>
                </div>

                {/* the image with the reference */}
                <img
                    crossOrigin={"anonymous"}
                    ref={imgRef}
                    className="experience-roundedimg"
                    src={cardInfo.companylogo}
                    alt={cardInfo.company}
                    onLoad={() => getColorArrays()}
                    title={cardInfo.title}
                />
            </div>
            <div className="experience-text-details">
                <h5 className="experience-text-role">
                    {cardInfo.role}
                </h5>
                <h5 className="experience-text-date">
                    {cardInfo.date}
                </h5>
                <p className="subTitle experience-text-desc">
                    {cardInfo.desc}
                </p>
                {/* Render popup only in desktop view */}
                {isDesktopView && (
                    <div className="pop-btn">
                        <input type="button" value="More Details..." className="bttn" onClick={togglePopup} />
                        {isOpen && (
                            <Popup
                                isOpen={isOpen}
                                content={
                                    <div className="box-content">
                                        {cardInfo.responsibilities && (
                                            <>
                                                <h5>Responsibilities:</h5>
                                                <p className="subTitle experience-text-desc-x">
                                                    {cardInfo.responsibilities}
                                                </p>
                                            </>
                                        )}
                                        {cardInfo.tech && (
                                            <>
                                                <h5>Technologies Used:</h5>
                                                <p className="subTitle experience-text-desc-x">
                                                    {cardInfo.tech}
                                                </p>
                                            </>
                                        )}
                                        {cardInfo.achievements && (
                                            <>
                                                <h5> Achievements:</h5>
                                                <p className="subTitle experience-text-desc-x">
                                                    {cardInfo.achievements}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                }
                                handleClose={togglePopup}
                            />
                        )}
                    </div>
                )}
                {/* show descriptions only in Mobile view */}
                {!isDesktopView && (
                    <div className="box-content">
                        {cardInfo.responsibilities && (
                            <>
                                <h5>Responsibilities:</h5>
                                <p className="subTitle experience-text-desc-x">
                                    {cardInfo.responsibilities}
                                </p>
                            </>
                        )}
                        {cardInfo.tech && (
                            <>
                                <h5>Technologies Used:</h5>
                                <p className="subTitle experience-text-desc-x">
                                    {cardInfo.tech}
                                </p>
                            </>
                        )}
                        {cardInfo.achievements && (
                            <>
                                <h5> Achievements:</h5>
                                <p className="subTitle experience-text-desc-x">
                                    {cardInfo.achievements}
                                </p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div >
    );
}
