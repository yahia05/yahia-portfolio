import React from "react";
import "../CSS/Skills.css";
import SoftwareSkill from "../Components/SoftwareSkill";
import { skillsSection } from "../Portfolio";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
    if (!skillsSection.display) {
        return null;
    }
    return (
        <div className="main">
            <div className="skills-main-div" id="skills">
                <Fade right duration={1000}>
                    <div className="skills-text-div">
                        <h1 className="skills-heading">
                            {skillsSection.title}{" "}
                        </h1>
                        <p className="subTitle skills-text-subtitle">
                            {skillsSection.subTitle}
                        </p>
                        <SoftwareSkill />
                        <div className="skillsT">
                            {skillsSection.skills.map((skills, i) => {
                                return (
                                    <p key={i} className="subTitle skills-text">
                                        {skills}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
