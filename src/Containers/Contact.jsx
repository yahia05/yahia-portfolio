import React from "react";
import "../CSS/Contact.css";
import SocialMedia from "../Components/SocialMedia";
import { contactInfo, greeting } from "../Portfolio";
import { Fade } from "react-awesome-reveal";
import { Suspense } from "react";

export default function Contact() {
    return (
        <Suspense >
            <Fade bottom duration={1000} distance="20px">
                <div className="main contact-margin-top" id="contact">
                    <div className="contact-div-main">
                        <div className="contact-header">
                            <h1 className="heading contact-title">{contactInfo.title}</h1>
                            <p className="subTitle contact-subtitle"> {contactInfo.subtitle}</p>
                            <div className="contact-text-div">
                                {contactInfo.number && (
                                    <>
                                        <a className="contact-detail" href={"tel:" + contactInfo.number}>
                                            {contactInfo.number}
                                        </a>
                                        <br />
                                        <br />
                                    </>
                                )}
                                <a className="contact-detail-email" href={"mailto:" + contactInfo.email_address}>
                                    {contactInfo.email_address}
                                </a>
                                <br />
                                <br />
                                <a type="button" href={greeting.resumeLink} className="btnn" id="resume" target="_blank" rel="noreferrer">See My Resume</a><br /><br />
                                <a type="button" href={greeting.appointmentLink} className="btnn" id="appointment" target="_blank" rel="noreferrer">Book an Appointment</a>
                                <br />
                                <br />
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Suspense>
    );
}
