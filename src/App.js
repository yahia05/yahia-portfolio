import './App.css'
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import structuredData from './structuredData.json';
import Header from "./Components/Header";
import Greeting from "./Containers/Greeting";
import Skills from "./Containers/Skills";
import WorkExperience from "./Containers/WorkExperience";
import Footer from "./Components/Footer";
import Contact from "./Containers/Contact";
import SiteWeb from './Containers/SiteWeb';
import Services from './Containers/Services';

export default function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <Header />
            <Greeting />
            <Skills />
            <WorkExperience />
            <SiteWeb />
            <Services />
            <Contact />
            <Footer />
        </HelmetProvider>
    );
}