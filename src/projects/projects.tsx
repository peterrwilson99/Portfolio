export interface Project {
    id: string;
    name: string;
    date: string;
    preview: string;
    description: string;
    images: string[];
    github?: string;
    website?: string;
    tags: string[];
    jsx_description?: boolean;
    similarTags?: number;
}

export const projects: Project[] = [
    {
        id: "0",
        name: "Individual Pursuits",
        date: "April 2022",
        preview: "A distributed web application to track goals and progress for people with developmental disabilities.",
        description: "individual-pursuits",
        images: ["/images/ip2.png", "/images/ip1.png", "/images/ip3.png", "/images/ip4.png", "/images/ip5.png", "/images/ip6.png"],
        github: null,
        website: null,
        tags: ["Next.js", "Express.js", "MUI", "React", "TypeScript", "Docker", "PostgreSQL", "Prisma", "DigitalOcean"],
        jsx_description: true,
    },
    {
        id: "13",
        name: "MUI Form Builder (NPM Package)",
        date: "September 2023",
        preview: "A React component library for building forms using MaterialUI components. Published as an NPM package.",
        description: "form-builder",
        jsx_description: true,
        images: ["/images/formbuilder2.png", "/images/formbuilder5.png", "/images/formbuilder3.png", "/images/formbuilder4.png", "/images/formbuilder1.png"],
        github: "https://github.com/peterrwilson99/form-builder-mui",
        website: "https://www.npmjs.com/package/form-builder-mui",
        tags: ["npm", "MUI", "React", "TypeScript"],
    },
    {
        id: "10",
        name: "Wordle Clone",
        date: "July 2023",
        preview: "A Wordle clone built using NextJS, MaterialUI, and Vercel.",
        description:
            "This project is a recreation of the popular word puzzle game, Wordle. It was built using React.js and Material-UI, aiming to capture the essence of the original game while demonstrating the ability to follow strict design specifications.\n\n        The recreated Wordle game is designed to work across a variety of devices. It maintains its look and feel whether played on a desktop, tablet, or mobile device. A focus on responsive design ensures that the game adapts to different screen sizes, making it enjoyable for players regardless of their chosen platform.\n\n        \n\n        In addition to device compatibility, this recreation of Wordle includes both light and dark modes. These features were added to accommodate the visual preferences of different users, providing them with a comfortable viewing experience no matter their setting or time of day.\n\n        \n\nThis project is a practical demonstration of faithfully replicating a game, while incorporating elements of modern web design, such as responsiveness and theme versatility. It showcases a careful and precise approach to building a game that captures the original Wordle experience and makes it accessible to anyone, anywhere.",
        images: ["/images/wordleclone1.png", "/images/wordleclone2.png", "/images/wordleclone3.png", "/images/wordleclone4.png"],
        github: "https://github.com/peterrwilson99/WordleClone",
        website: "https://peterswordle.vercel.app/",
        tags: ["Next.js", "MUI", "React", "JavaScript"],
    },
    {
        id: "1",
        name: "Scalable Day Trading Application",
        date: "April 2023",
        preview: "Distributed day trading application using gRPC, NextJS, MaterialUI, and more.",
        description:
            "Day-Trader is a scalable day trading application developed as part of UVic's Scalable Systems offering (SENG 468). It provides users with the ability to engage in day trading activities through a user-friendly GUI and a command-line interface (CLI).\n\nThe architecture of Day-Trader is designed for scalability and efficiency. It consists of various components such as the Web Browser, Next Server, CLI, Transaction Server, Database (Postgres), Quote Server Adaptor, and Uvic Quote Server. These components communicate with each other using gRPC calls and TCP sockets to handle user requests, update the database, and retrieve stock quotes.\n\n This project included three students, with my primary contributions being to the frontend.",
        images: [
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/1.png?raw=true",
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/2.png?raw=true",
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/3.png?raw=true",
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/4.png?raw=true",
        ],
        github: "https://github.com/MarcusDunn/day-trader",
        website: null,
        tags: ["Next.js", "MUI", "React", "JavaScript", "Docker"],
    },
];

export function getSimilarProjects(projectToCompare: Project): Project[] {
    let projectsCopy = [...projects];
    // remove projectToCompare from projectsCopy
    projectsCopy = projectsCopy.filter((project) => project.name !== projectToCompare.name);

    let similarProjects: Project[] = [];
    for (const project of projectsCopy) {
        let similarTags = 0;
        for (const tag of projectToCompare.tags) {
            if (project.tags.includes(tag)) {
                similarTags++;
            }
        }
        project.similarTags = similarTags;
        if (similarTags > 0) {
            similarProjects.push(project);
        }
    }

    // sort similarProjects by similarTags at the top
    similarProjects.sort((a, b) => (a.similarTags < b.similarTags ? 1 : -1));

    // if similarProjects.length > 3, return the first 3
    if (similarProjects.length > 3) {
        return similarProjects.slice(0, 3);
    }

    // remove all similarProjects from projectsCopy
    projectsCopy = projectsCopy.filter((project) => !similarProjects.includes(project));

    // select random projects from projectsCopy to fill the rest of the array
    const randomProjects = selectRandomElements(projectsCopy, 3 - similarProjects.length);
    return [...similarProjects, ...randomProjects];
}

function selectRandomElements(array: Project[], n: number): Project[] {
    return array.sort(() => 0.5 - Math.random()).slice(0, n);
}
