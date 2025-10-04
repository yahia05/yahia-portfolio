/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.css file

import emoji from "react-easy-emoji";
import iswy from './assets/images/iswy logo.jpg';
import investM from './assets/images/InvestM.png';
import khayalcom from './assets/images/khayalcom.png';
import coordiv from './assets/images/coordiv.jpg';


// Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Yahia Dev",
    title: "I'm Yahia Mohamed",
    subTitle:
        emoji(
            "A passionate Web Developer 🚀 having an experience of building Web Sites with Laravel / Reactjs / and some other cool libraries."
        )
    ,
    resumeLink: "https://drive.google.com/file/d/1LFvb9FlOx9uJZGeiGvyZx6kXvcJyq3E4/view?usp=drive_link",
    appointmentLink: "https://calendly.com/yahia-dev-01/dev-consulting",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/feitan05",
    linkedin: "https://www.linkedin.com/in/yahia-mohamed05/",
    gmail: "yahia.dev.01@gmail.com",
    gitlab: "https://gitlab.com/feitan05",
    // facebook: "https://www.facebook.com",
    // medium: "https://medium.com",
    // stackoverflow: "https://stackoverflow.com",
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "I am a web developer with a passion for exploring diverse technology stacks. My expertise spans across:",
    skills: [
        emoji(
            "☄️ Building responsive website front end using ReactJS"
        )
        ,
        emoji(
            "☄️ Leveraging my skills to create robust web applications that meet client requirements and industry standards."
        )
        ,
        emoji(
            "☄️ Contributing to projects that leverage my expertise in frontend and backend development."
        )
    ],


    softwareSkills: [
        {
            skillName: "HTML",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "Bootstrap",
            fontAwesomeClassname: "fab fa-bootstrap"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactJS",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "NodeJS",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "PHP",
            fontAwesomeClassname: "fab fa-php"
        },
        {
            skillName: "Laravel",
            fontAwesomeClassname: "fab fa-laravel"
        },
        {
            skillName: "MySQL, MongoDB",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "Docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "Wordpress",
            fontAwesomeClassname: "fab fa-wordpress"
        },
        {
            skillName: "GitHub",
            fontAwesomeClassname: "fab fa-github"
        },
        {
            skillName: "GIT",
            fontAwesomeClassname: "fab fa-git"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};


// Work experience section
const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Web Developer",
            company: "ISWY Consulting",
            companylogo: iswy,
            date: "July 2022 – August 2022",
            desc: "Contributed as a web developer to the development of an ecommerce website specializing in electronic components.",
            responsibilities: "Collaborated within a team to design and develop both frontend interfaces and backend functionality. Utilized PHP, JavaScript, and MySQL to manage data exchange and ensure seamless functionality of the website.",
            tech: "PHP, HTML, CSS, JavaScript, MySQL, PHPMyAdmin, Apache, VS Code.",
            achievements: "Successfully completed the project under the guidance of the internship supervisor, ensuring all deliverables met the project requirements and deadlines.",
            title: "ISWY Consulting"
            // descBullets: [
            //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            // ]
        },
        {
            role: "Web Developer",
            company: "CoorDiv",
            companylogo: coordiv,
            date: "July 2023 – September 2023",
            desc: "In my role as a Web Developer at CoorDiv, I contributed to a variety of web development projects utilizing a range of technologies and frameworks.",
            responsibilities: " My responsibilities included designing and developing websites using PHP, Laravel, WordPress, WooCommerce, JavaScript, and MySQL. I implemented frontend interfaces and backend functionalities aligned with client requirements, ensuring seamless integration and optimal performance.",
            tech: "PHP, Laravel, HTML, CSS, Bootstarp, JavaScript, MySQL, PHPMyAdmin, Apache, VS Code, WordPress, WooCommerce, Hostinger.",
            achievements: "Successfully completed both projects according to clients specifications and expectations, ensuring robust functionality and user-friendly interfaces. Accomplished all project goals as per clients requests.",
            title: "CoorDiv"
        },
        {
            role: "Web Developer",
            company: "Khayalcom",
            companylogo: khayalcom,
            date: "October 2023 – December 2023",
            desc: "As a web developer at Khayalcom, I specialized in creating customized websites for clients, including ecommerce sites, personal portfolios, business websites, and online marketplaces.",
            responsibilities: "My responsibilities included designing and developing websites from concept to completion, ensuring functionality, usability, and visual appeal. I collaborated closely with clients to understand their needs and preferences, translating them into effective web solutions.",
            tech: "I utilized a diverse range of technologies including WordPress, WooCommerce, PHP, JavaScript, MySQL, VS Code, Hostinger, and phpMyAdmin to implement frontend and backend functionalities according to project requirements.",
            achievements: "Throughout my tenure, I successfully delivered numerous projects that met client objectives and received positive feedback. I consistently maintained high standards of code quality, adhered to best practices, and contributed to the overall success of each project by ensuring timely delivery and client satisfaction.",
            title: "Khayalcom"
        },
        {
            role: "Web Developer",
            company: "Invest'M Consulting",
            companylogo: investM,
            date: "January 2024 – June 2024",
            desc: "At Invest'M Consulting, I continued to excel in creating diverse websites for clients, including ecommerce platforms, personal portfolios, business websites, and online marketplaces. I expanded my expertise by handling a larger volume of projects compared to my previous role at Khayalcom.",
            responsibilities: "My responsibilities remained focused on designing and developing custom websites that met client specifications and optimized user experience. I collaborated closely with clients and internal teams to ensure seamless project execution from conception to deployment.",
            tech: "I leveraged a comprehensive set of technologies, including WordPress, WooCommerce, PHP, JavaScript, MySQL, VS Code, Hoostinger, IONOS, O2switch and phpMyAdmin. These tools enabled me to implement both frontend and backend functionalities effectively.",
            achievements: " During my tenure at Invest'M Consulting, I successfully delivered a higher volume of projects while maintaining high standards of quality and client satisfaction. I demonstrated strong problem-solving skills and adaptability in managing multiple projects simultaneously.",
            title: "Invest'M Consulting"
        }
    ]
};

// Some big projects you have worked on

const bigProjects = {
    title: "Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR WEB SITE",
    projects: [
        {
            image: require("./assets/images/companies/9era.online.png"),
            projectName: "9era Online",
            projectDesc: "E-learning web application for IT courses and Tech events.",
            screenshot: require("./assets/images/siteweb/9era-Online.png"),
            tech: "HTML, CSS, Bootstrap, JavaScript, Laravel, MySQL, Git",
            lgDesc: "9era.online is an innovative platform designed to curate and present high-quality video content from YouTube, specifically tailored for students in the IT department. Utilizing HTML, CSS, Bootstrap, JavaScript, Laravel, MySQL, and Git, the website features a user-friendly interface with essential functionalities, including a secure login and signup system, a comprehensive courses page with detailed descriptions and videos, and a dedicated section for the latest IT events. This project aims to enhance learning by providing easy access to valuable resources across various development domains."
        },
        {
            image: require("./assets/images/companies/knctec.png"),
            projectName: "KNC TECH",
            projectDesc: "E-commerce website that sells equipment and supplies for the printing industry.",
            screenshot: require("./assets/images/siteweb/Home-KNC-Tech.png"),
            tech: "Wordpress, Woocommerce, Elementor",
            lgDesc: "KNC TECH is dedicated to providing top-quality equipment and supplies for the printing industry. Built using WordPress, WooCommerce, and Elementor, the site offers seamless functionality, including two order types: customers can either place orders directly through the website or easily initiate a WhatsApp order with a single click that populates product details automatically. Additionally, various payment methods are integrated to accommodate customer preferences. The website also features a dedicated page for requesting quotes, catering primarily to companies in need of heavy printing materials, and ensuring a user-friendly experience for all buyers."
        },
        {
            image: require("./assets/images/companies/js.png"),
            projectName: "June Studio 3D",
            projectDesc: "An online platform specializing in Photogrammetry solutions: 3D scanning, real-time architectural visualization.",
            screenshot: require("./assets/images/siteweb/JuneStudio-–-Photogrammétrie-–-Scan-3D-Maroc.png"),
            screenshot2: require("./assets/images/siteweb/Services-–-JuneStudio.png"),
            tech: "Wordpress, Elementor, Archub",
            lgDesc: "June Studio 3D showcases the company’s expertise in 3D photogrammetry, product digitization, and immersive visualization of monuments and people. Built with WordPress, Elementor, and Archub, the site features an eye-catching homepage slider, a fully moderated appointment booking system, and dedicated pages detailing the services and showcasing completed projects. Additionally, a blog page offers valuable insights, while a contact page facilitates easy communication for both companies and individuals seeking there innovative solutions."
        },
        {
            image: require("./assets/images/companies/drone-sol.png"),
            projectName: "Drone Solutions 31",
            projectDesc: "An online platform that offers drone-based inspection and cleaning services.",
            screenshot: require("./assets/images/siteweb/Inspection-et-nettoyage-par-drone-Occitanie-Drone-Solutions-31 (1).png"),
            tech: "Wordpress, Elementor",
            lgDesc: "Drone Solutions 31 offers innovative drone-based inspection and cleaning services for both companies and individuals. Built with WordPress and Elementor, the site features an attractive homepage slider, dedicated pages presenting detailed service offerings and showcasing completed projects. A blog page provides insights into industry trends, while a contact page facilitates easy communication. Additionally, a convenient button allows users to book appointments directly through Calendly, ensuring a seamless experience for clients seeking efficient and high-quality drone services."
        },
        {
            image: require("./assets/images/companies/khayalcom.png"),
            projectName: "Khayalcom",
            projectDesc: "A website to showcase their communication agency, emphasizing their expertise in web and print services.",
            screenshot: require("./assets/images/siteweb/Agence-de-communication-Web-et-print-à-Casablanca-.png"),
            tech: "Wordpress, Elementor",
            lgDesc: "This website serves as a dynamic showcase for the communication agency Khayalcom, highlighting services in Printing and Digital Marketing. Crafted with WordPress and Elementor, the site features an eye-catching slider that captivates visitors from the start. Users can explore comprehensive service descriptions, view a portfolio of successful projects, and engage with a blog that shares industry insights. A standout feature is the interactive catalog page, allowing users to flip through a digital representation of printed products and marketing services. The contact page ensures seamless communication for both businesses and individuals seeking professional solutions."
        },
        {
            image: require("./assets/images/companies/delta.png"),
            projectName: "Delta Diagnostics",
            projectDesc: "A showcase website presenting real estate diagnostic services.",
            screenshot: require("./assets/images/siteweb/Delta-diagnostic-Diagnostic-immobilier.png"),
            tech: "Wordpress, Divi",
            lgDesc: "This showcase website presents a comprehensive overview of real estate diagnostic services tailored for both companies and individuals. Built with WordPress and Divi, the site features a visually appealing landing page that highlights the diagnostic services offered, along with a showcase of partner companies. Contact information is conveniently placed in the footer for easy access. The design prioritizes clarity and professionalism, ensuring that visitors can quickly understand the services and reach out for inquiries."
        },
        {
            image: require("./assets/images/companies/moncaf.png"),
            projectName: "Mon Caftan",
            projectDesc: "An e-commerce website specialized in selling Moroccan traditional clothing.",
            screenshot: require("./assets/images/siteweb/Accueil-moncaftan.png"),
            tech: "Wordpress, Woocommerce, Elementor",
            lgDesc: "This e-commerce platform focuses on offering a range of traditional Moroccan women’s clothing. Developed using WordPress, WooCommerce, and Elementor, it includes an eye-catching slider and a custom login/sign-in page based on client specifications. The site features detailed product descriptions organized by categories, as well as dedicated pages for contact and a blog. Additionally, various payment methods are integrated to accommodate customer preferences."
        },
        {
            image: require("./assets/images/companies/investm.png"),
            projectName: "Invest'M",
            projectDesc: "A website showcasing their services in Financial Consulting, Business Management, Administrative Management, and Digital Marketing.",
            screenshot: require("./assets/images/siteweb/Investir-au-Maroc-en-Toute-Confiance-avec-invest-M-Consulting (1).png"),
            tech: "Wordpress, Elementor",
            lgDesc: "This website showcases services in financial consulting, business management, administrative management, and digital marketing. Built with WordPress and Elementor, it features an attractive slider and dedicated pages detailing each service, along with a portfolio of completed projects and notable clients. A blog page offers insights into industry trends, and a contact page facilitates communication with both companies and individuals seeking professional guidance."
        },
        {
            image: require("./assets/images/companies/Artboard-2-copy.webp"),
            projectName: "Red Wear",
            projectDesc: "An e-commerce website specialized in selling Jeans for Women.",
            screenshot: require("./assets/images/siteweb/RED-WEAR.png"),
            tech: "Wordpress, Woocommerce, Elementor",
            lgDesc: "This e-commerce platform focuses on offering a range of women’s clothing. Developed using WordPress, WooCommerce, and Elementor, it includes an eye-catching slider. The site features detailed product descriptions organized by categories, as well as dedicated pages for contact and a blog. Additionally, various payment methods are integrated to accommodate customer preferences."
        },
        {
            image: require("./assets/images/companies/vkarte.png"),
            projectName: "VKarte",
            projectDesc: "A website that showcases NFC card printing services and also functions as an e-commerce platform for selling custom-printed NFC cards.",
            screenshot: require("./assets/images/siteweb/Carte-Visite-NFC-Optimisez-Votre-Réseau-Professionnel.png"),
            tech: "Wordpress, Woocommerce, Elementor",
            lgDesc: "VKARTE is a dynamic website that showcases NFC card printing services and functions as a comprehensive e-commerce platform for custom-printed NFC cards. Designed using WordPress, WooCommerce, and Elementor, the site features an engaging home slider that highlights key services and promotions. Users can explore detailed product pages that provide in-depth information about each card, making the purchasing process straightforward and informative. A dedicated section educates visitors on how NFC technology works and outlines its numerous benefits, helping customers understand its value. Additionally, VKARTE includes a customized area specifically for businesses looking to leverage NFC solutions, with tailored content that addresses their unique needs. Users can easily request demos and quotes through intuitive forms, enhancing the overall user experience. The site also features a contact page for inquiries and a blog section to share insights, updates, and tips related to NFC technology. I developed the entire website, focusing on creating a cohesive and user-friendly interface that caters to both individual consumers and corporate clients."
        },
        {
            image: require("./assets/images/companies/MarocCaf.png"),
            projectName: "MaroCaftan",
            projectDesc: "A marketplace featuring multiple vendors specializing in the sale of Moroccan traditional clothing.",
            screenshot: require("./assets/images/siteweb/Maroc-Caftan.png"),
            tech: "Wordpress, Woocommerce, Dokan, Elementor",
            lgDesc: "MaroCaftan marketplace features multiple vendors specializing in the sale of Moroccan traditional clothing. Developed using WordPress, WooCommerce, Dokan, and Elementor, the site includes an attractive slider and a comprehensive dashboard for sellers, providing all necessary functionalities. Each seller has a dedicated profile and store, with product organization based on categories and stores. The platform supports multiple payment methods and includes a blog and contact pages for user engagement. Additionally, a support bot is integrated for quick assistance, enhancing the overall shopping experience."
        },
        {
            image: require("./assets/images/companies/reve.png"),
            projectName: "Rêve D'opale",
            projectDesc: "An e-commerce website specializing in selling men's and women's jewelry.",
            screenshot: require("./assets/images/siteweb/Accueil-Reve-D-opale (1).png"),
            tech: "Wordpress, Woocommerce, Elementor",
            lgDesc: "Rêve D'opale focuses on offering a range of men's and women's jewelry. Developed using WordPress, WooCommerce, and Elementor, it includes an eye-catching slider. The site features detailed product descriptions organized by categories, as well as dedicated pages for contact and a blog. Additionally, various payment methods are integrated to accommodate customer preferences."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
    title:
        emoji(
            "Reach Out to me!"
        )
    ,
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+212 687-622904",
    email_address: "yahia.dev.01@gmail.com"
};

const services = {
    title: "Services",
    subtitle: "SOME SERVICES I PROVIDE",
    service: [
        {
            title: "Custom Website Development",
            desc: "Creation of responsive websites from scratch using HTML, CSS, JavaScript and backend technologies like PHP, NodeJS, MySQL.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Frontend Development",
            desc: "Building the client-side of websites using HTML, CSS, and JavaScript, ReactJS",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Backend Development",
            desc: "Implementation of robust server-side applications and APIs using NodeJS, PHP.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Full-Stack Development",
            desc: "Development of end-to-end web solutions, ensuring seamless integration of frontend and backend functionalities.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "E-commerce Solutions",
            desc: "Creation of secure and scalable online stores with features like product catalogs, shopping carts, and payment gateway integration.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Content Management Systems (CMS)",
            desc: "Customization and development of CMS platforms such as WordPress, Drupal, WooCommerce and Wix for efficient content management.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Database Integration",
            desc: "Integrating databases such as MySQL and MongoDB to support data-driven web applications, ensuring efficient data management and retrieval.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Web Hosting",
            desc: " Assisting with setting up web hosting services and deploying web applications to ensure optimal performance and reliability.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Website Maintenance and Support",
            desc: "Providing ongoing updates, security patches, and technical support to ensure websites remain secure and perform optimally.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        },
        {
            title: "Consultation and Strategy",
            desc: "Offering expert advice on technology choices, scalability planning, and digital strategy to meet business objectives.",
            button: "Book a meeting",
            buttonLink: "https://calendly.com/yahia-dev-01/dev-consulting"
        }
    ]

};


export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    workExperiences,
    bigProjects,
    contactInfo,
    services
};
