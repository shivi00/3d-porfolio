import { meta, shopify, starbucks, tesla, capgemini, stratwings } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
    ,
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
    // {
    //     title: "Software Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Analyst Intern",
        company_name: "Capgemini",
        icon: capgemini,
        iconBg: "#fbc3bc",
        date: "Jun 2022 - Jul 2022",
        points: [
            "Developed REST APIs and added features for profit calculation and sales analysis, exporting these data as CSV, which helped in improving users' overall experience.",
            "Engineered Scripts to efficiently transfer data from XML files into the Postgres database tables, streamlining data administration processes and helped in saving 4-5 days for manual work.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Stratwings",
        icon: stratwings,
        iconBg: "#b7e4c7",
        date: "Sept 2024 - Mar 2024",
        points: [
            "Created Node.js REST APIs for user authentication, managing over 200 user registrations daily by streamlining OTP verification and email-sending processes.",
            "Spearheaded implementation of fetching date range data and its seamless display and exporting it in CSV",
            "Developed frontend functionalities, like searching, sorting, and filtering that improved overall user experience and engagement by 25%.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Stratwings",
        icon: stratwings,
        iconBg: "#a2d2ff",
        date: "Apr 2023 - Present",
        points: [
            "Integrated PhonePe payment gateway into the NodeJs backend using EJS, optimizing payment processes. Enhanced user experience, added email notifications for completed transactions, and deployed it using Hostinger",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Developed end-to-end video calling feature in NodeJs using Socket.io and WebRTC.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shivi00',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shivangini-prasad-266446191/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'eCommerce App',
        description: 'Created a fully functional eCommerce web app where users can buy products, review them, and get email confirmations upon successful orders.',
        link: 'https://github.com/shivi00/dj-shop',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Code Judge',
        description: 'Created a web application that remotely runs and compiles user-submitted code for various programming problems. Implemented the secure and isolated code execution environment using Docker containers, which support various popular programming languages.',
        link: 'https://github.com/shivi00/CodeJudge',
    }
    // ,
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];