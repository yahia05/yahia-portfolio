import React from "react";
import "../CSS/SiteWeb.css";
import { bigProjects } from "../Portfolio";
import { Fade } from "react-awesome-reveal";

export default function SiteWeb() {

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
                <h1 className="skills-heading">{bigProjects.title}</h1>
                <p className="subTitle project-subtitle">
                    {bigProjects.subtitle}
                </p>
                <div className="projects-container">
                    {bigProjects.projects.map((project, i) => {
                        return (
                            <div key={i} className="project-card project-card-light">
                                {project.image ? (
                                    <div className="project-image">
                                        <img
                                            src={project.image}
                                            alt={project.projectName}
                                            className="card-image"
                                            title={project.projectName}
                                        ></img>
                                    </div>
                                ) : null}
                                <div className="project-detail">
                                    <h5 className="card-title">
                                        {project.projectName}
                                    </h5>
                                    <br></br>
                                    <p className="card-subtitle">
                                        {project.projectDesc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fade>
    );
}
