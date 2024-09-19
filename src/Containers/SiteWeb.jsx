import React from "react";
import "../CSS/SiteWeb.css";
import ProjectCard from "../Components/ProjectsCard";
import { bigProjects } from "../Portfolio";
import { Fade } from "react-awesome-reveal";

export default function SiteWeb() {
    return (
        <div className="main" id="projects">
            <Fade bottom duration={1000} distance="20px">
                <h1 className="skills-heading">{bigProjects.title}</h1>
                <p className="subTitle project-subtitle">
                    {bigProjects.subtitle}
                </p>
                <div className="projects-container">
                    {bigProjects.projects.map((project, i) => {
                        return (
                            <ProjectCard key={i}
                                projectCard={{
                                    image: project.image,
                                    projectName: project.projectName,
                                    projectDesc: project.projectDesc,
                                    screenshot: project.screenshot,
                                    screenshot2: project.screenshot2,
                                    tech: project.tech,
                                    lgDesc: project.lgDesc
                                }}
                            />
                        );
                    }
                    )}
                </div>
            </Fade>
        </div>
    );
}
