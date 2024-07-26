import React from "react";
import "../CSS/WorkExperience.css";
import ExperienceCard from "../Components/ExperienceCard";
import { workExperiences } from "../Portfolio";
import { Fade } from "react-awesome-reveal";

export default function WorkExperience() {
    if (workExperiences.display) {
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                    <div className="experience-container" id="workExperience">
                        <div>
                            <h1 className="experience-heading">Experiences</h1>
                            <div className="experience-cards-div">
                                {workExperiences.experience.map((card, i) => {
                                    return (
                                        <ExperienceCard key={i}
                                            cardInfo={{
                                                company: card.company,
                                                desc: card.desc,
                                                date: card.date,
                                                companylogo: card.companylogo,
                                                role: card.role,
                                                responsibilities: card.responsibilities,
                                                tech: card.tech,
                                                achievements: card.achievements,
                                                descBullets: card.descBullets,
                                                title: card.title
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
    return null;
}
