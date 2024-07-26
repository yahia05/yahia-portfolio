import { Suspense } from "react";
import "../CSS/Services.css";
import { services } from "../Portfolio";

export default function Services() {
    return (
        <Suspense >
            <div className="main" id="Services">
                <h1 className="heading service-title">{services.title}</h1>
                <p className="subTitle service-subtitle">{services.subtitle}</p>
                <div className="service-cards-div-main">
                    {services.service.map((ser, i) => {
                        return (
                            <div className="service-card-div" key={i}>
                                <div className="service-name-div">
                                    {/* <svg aria-hidden="true" className="octicon service-svg" height="20" role="img" viewBox="0 0 12 16" width="14">
                                        <path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
                                    </svg> */}
                                    <svg className="octicon service-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
                                    </svg>
                                    <h5
                                        // className="service-name"
                                    >{ser.title}</h5>
                                </div>
                                <p className="service-description">{ser.desc}</p>
                                <div className="service-stats">
                                    <div className="service-left-stat">
                                        
                                    </div>
                                    <div className="service-right-stat">
                                        <a className="book" target="_blank" rel="noreferrer" href={ser.buttonLink}>{ser.button}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Suspense>
    );
}
