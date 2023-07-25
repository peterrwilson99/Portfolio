export const projects = [
    {
        id: "1",
        name: "Scalable Day Trading Application",
        date: "April 2023",
        preview: "Distributed day trading application using gRPC, NextJS, MaterialUI, and more.",
        description: "Day-Trader is a scalable day trading application developed as part of UVic's Scalable Systems offering (SENG 468). It provides users with the ability to engage in day trading activities through a user-friendly GUI and a command-line interface (CLI).\n\nThe architecture of Day-Trader is designed for scalability and efficiency. It consists of various components such as the Web Browser, Next Server, CLI, Transaction Server, Database (Postgres), Quote Server Adaptor, and Uvic Quote Server. These components communicate with each other using gRPC calls and TCP sockets to handle user requests, update the database, and retrieve stock quotes.\n\n This project included three students, with my primary contributions being to the frontend.",
        images: [
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/1.png?raw=true",
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/2.png?raw=true",
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/3.png?raw=true",
            "https://github.com/MarcusDunn/day-trader/blob/main/readmeimages/4.png?raw=true"
        ],
        github: "https://github.com/MarcusDunn/day-trader",
        website: null,
        tags: ["Next.js", "MUI", "React", "JavaScript", "Docker"]
    },
    {
        id: "10",
        name: "Wordle Clone",
        date: "July 2023",
        preview: "A Wordle clone built using NextJS, MaterialUI, and Vercel.",
        description: "This project is a recreation of the popular word puzzle game, Wordle. It was built using React.js and Material-UI, aiming to capture the essence of the original game while demonstrating the ability to follow strict design specifications.\n\n        The recreated Wordle game is designed to work across a variety of devices. It maintains its look and feel whether played on a desktop, tablet, or mobile device. A focus on responsive design ensures that the game adapts to different screen sizes, making it enjoyable for players regardless of their chosen platform.\n\n        \n\n        In addition to device compatibility, this recreation of Wordle includes both light and dark modes. These features were added to accommodate the visual preferences of different users, providing them with a comfortable viewing experience no matter their setting or time of day.\n\n        \n\nThis project is a practical demonstration of faithfully replicating a game, while incorporating elements of modern web design, such as responsiveness and theme versatility. It showcases a careful and precise approach to building a game that captures the original Wordle experience and makes it accessible to anyone, anywhere.",
        images: [
            "/images/wordleclone1.png",
            "/images/wordleclone2.png",
            "/images/wordleclone3.png",
            "/images/wordleclone4.png"
        ],
        github: "https://github.com/peterrwilson99/WordleClone",
        website: "https://peterswordle.vercel.app/",
        tags: ["Next.js", "MUI", "React", "JavaScript"]
    },
    {
        id: "9",
        name: "Scalable Social Media Backend",
        date: "March 2023",
        preview: "A scalable social media application using Express.js, Nginx, Redis, and MongoDB",
        description: "This application was part of the SENG 468 Spring offering, where the goal was to design a scalable and fault-tolerant social media platform that enables users to create and share posts. The platform needed to handle a large number of concurrent users and support real-time notifications and messaging. To achieve this, a combination of MongoDB, Redis, Nginx Load Balancer, and redis queuing were utilized. The solution included components such as a MongoDB database for storing user, post, comment, and notification information, a Redis cache for improving performance, an Nginx Load Balancer for distributing requests and enhancing availability, and a messaging system using Redis for real-time notifications and user messaging. The project was containerized using Docker, with a provided Docker Compose file for easy setup and deployment. Additionally, scripts were developed to populate the database with sample data for testing, and perform basic CRUD operations on the database.",
        images: [
            "/images/scalable1.png",
        ],
        github: "https://github.com/peterrwilson99/SENG468ScalableBackend",
        website: null,
        tags: ["Express.js", "TypeScript", "Redis", "Nginx", "MongoDB"]
    },
    {
        id: "11",
        name: "NBA Hall of Fame Predictor",
        date: "July 2023",
        preview: "A predictive model built using Python and various data science libraries to predict NBA Hall of Fame inductions.",
        description: "The aim of this project is to employ supervised machine learning techniques to predict future inductions into the National Basketball Association (NBA) Hall of Fame based on the statistical performance and career achievements of NBA players. Python is utilized as the primary programming language due to its ease of use and extensive support for scientific computing tasks. Key libraries used include Pandas for data handling and manipulation, NumPy for numerical computations, Matplotlib and Seaborn for data visualization, and Scikit-learn for implementing machine learning models and processing pipelines.\n\nThe process begins with cleaning and processing the data, which include player statistics for each season played from 1950-2022, All-Star data, Hall of Fame statistics, and Finals and Season MVP statistics. A variety of machine learning algorithms are then tested on the data to identify the most accurate predictor for Hall of Fame induction. The best-performing model is fine-tuned to maximize its predictive performance.\n\nThe objective of the project is not just to construct a predictive model, but to gain insight into the factors that contribute most significantly to a player's likelihood of being inducted into the Hall of Fame. With this knowledge, teams could potentially identify future Hall of Fame players early in their careers, assisting in drafting and recruitment decisions.",
        images: [
            "/images/nbahofpredictor1.png",
            "/images/nbahofpredictor2.png",
            "/images/nbahofpredictor3.png",
            "/images/nbahofpredictor4.png"
        ],
        github: "https://github.com/peterrwilson99/nba-hof-predictor",
        website: "https://github.com/peterrwilson99/nba-hof-predictor/blob/main/report.ipynb",
        tags: ["Python", "Pandas", "NumPy", "Matplotlib" , "Scikit-Learn"]
    },
    {
        id: "12",
        name: "Apple Music to Spotify Playlist Converter",
        date: "July 2023",
        preview: "A Python project to transfer playlists from Apple Music to Spotify, using Selenium for web scraping and Spotipy to interact with Spotify's Web API.",
        description: "This Python project fetches a list of songs from an Apple Music playlist and updates a Spotify playlist with the same set of songs. It employs Selenium for web scraping to fetch song details from Apple Music, and Spotipy, a lightweight Python library, to interact with Spotify's Web API and update the Spotify playlist.\n\nThe project structure consists of three key Python scripts. 'main.py' serves as the driver script for executing the main functions. 'apple.py' includes the function to scrape songs from an Apple Music playlist. 'spotify.py' contains functions to interact with Spotify's Web API to fetch song IDs and update a Spotify playlist.\n\nAn essential part of the project is the .env file, storing necessary environment variables. Although not included in the repository due to security reasons, a setup script, 'generator.py', is provided to assist the user in creating this file.\n\nTo run the program, the user needs to execute the 'main.py' script. The program will then fetch the song list from the Apple Music playlist and convert the song names and artist names into track IDs using the Spotify Web API. The provided Spotify playlist is updated with these track IDs.\n\nPlease note that due to song availability and naming differences between Apple Music and Spotify, some songs might not get transferred.",
        images: [
            "/images/appletospotify.png"
        ],
        github: "https://github.com/peterrwilson99/AppleToSpotify",
        tags: ["Python", "Selenium"]
    },
    {
        id: "2",
        name: "Miguel Manguerra's Portfolio",
        date: "August 2022",
        preview: "Portfolio containing Miguel's projects using NextJS with MaterialUI components.",
        description: "Portfolio containing Miguel's projects using NextJS with MaterialUI components.",
        images: [
            "/images/migoy1.png",
            "/images/migoy2.png",
            "/images/migoy3.png",
            "/images/migoy4.png"
        ],
        github: "https://github.com/peterrwilson99/miguel-next",
        website: "https://miguelmanguerra.vercel.app/",
        tags: ["Next.js", "MUI", "React", "JavaScript", "SendGrid"]
    },
    {
        id: "3",
        name: "Quizzie",
        date: "February 2023",
        preview: "A quiz app for UVIC courses lacking practice midterms, using AI tooling to generate realistic questions from notes.",
        description: "Quizzie is a quiz application developed to provide students with practice materials for midterms that lacked official practice exams. Built using NextJS, React, and MaterialUI components, Quizzie offers an intuitive interface for students to test their knowledge. \n\nUsing markdown notes and ChatGPT, we generated quizzes in a specific JSON format that could be directly imported into the React Quiz component. Originally designed for a single midterm, the app evolved to accommodate multiple classes and tests, attracting a community of students seeking comprehensive test preparation. \n\nWith NextJS, React, and MaterialUI, Quizzie delivers a visually appealing and user-friendly experience. Its intelligent quiz generation system, powered by ChatGPT, ensures a wide range of questions to cover the course material effectively.",
        images: [
            "/images/quizzie1.png",
            "/images/quizzie2.png",
            "/images/quizzie3.png"
        ],
        github: "https://github.com/peterrwilson99/QuizApp",
        website: "https://quizzie-uvic.vercel.app/",
        tags: ["Next.js", "MUI", "React", "JavaScript"]
    },
    {
        id: "6",
        name: "Pretty Clock",
        date: "October 2022",
        preview: "A simple web application to display the time with an aesthetic background.",
        description: "A simple web application to display the time with an aesthetic background using NextJS and Vercel. Great for work stations where a monitor isn't being used. Uses Unsplash.com for its random image generator, where every minute the application grabs a new image to display.",
        images: [
            "/images/clock1.png",
            "/images/clock2.png"
        ],
        github: null,
        website: "https://prettyclock.vercel.app/",
        tags: ["Next.js", "MUI", "React", "JavaScript"]
    },
    {
        id: "7",
        name: "Intermediate Data Format (IDF) File Updater",
        date: "April 2021",
        preview: "IDF Updater project, developed for the Energy In Cities Group, to update IDF files within python scripts and notebooks.",
        description: "The IDF Updater python project, developed for the Energy In Cities Group, simplifies the task of updating EnergyPlus IDF files to newer versions. With support for updating from version 8.0 to the latest EnergyPlus version, this project offers a convenient solution for Linux and MacOS users, providing the ability to update singular IDF files, lists of IDF files, or entire directories of IDF files with ease. By automating the conversion process, the IDF Updater saves time and effort, ensuring that EnergyPlus simulations are up to date and in sync with the latest features and improvements.\n\n\n Can be installed using `pip install idf-updater`",
        images: [
            "/images/idf1.png",
            "/images/idf2.png"
        ],
        github: "https://gitlab.com/energyincities/idf_updater",
        website: "https://idf-updater.readthedocs.io/en/latest/",
        tags: ["Python", "EnergyPlus", "PyPi", "ReadTheDocs"]
    },
    {
        id: "8",
        name: "UVIC Term Timeline Creator",
        date: "November 2020",
        preview: "A python application to help students plan what terms to schedule courses in based on offering dates and course weights.",
        description: "A python application to help students plan what terms to schedule courses in based on offering dates and course weights.",
        images: [
            "/images/uvic1.png",
            "/images/uvic2.png",
            "/images/uvic3.png"
        ],
        github: "https://gitlab.com/peterrwilson99/uvic-timeline-creator",
        website: "https://uvic-timeline-creator.readthedocs.io/en/latest/",
        tags: ["Python", "Pandas", "PyPi", "ReadTheDocs"]
    },
]

export function getSimilarProjects(projectToCompare){
    let projectsCopy = [...projects]
    // remove projectToCompare from projectsCopy
    projectsCopy = projectsCopy.filter((project) => project.name !== projectToCompare.name)
    
    let similarProjects = []
    for(const project of projectsCopy){
        let similarTags = 0
        for(const tag of projectToCompare.tags){
            if(project.tags.includes(tag)){
                similarTags++
            }
        }
        project.similarTags = similarTags
        if(similarTags > 0){
            similarProjects.push(project)
        }
    }
    
    // sort similarProjects by similarTags at the top
    similarProjects.sort((a, b) => (a.similarTags < b.similarTags) ? 1 : -1)
    
    // if similarProjects.length > 3, return the first 3
    if(similarProjects.length > 3){
        console.log("SimilarProjects.length", similarProjects.length)
        return similarProjects.slice(0, 3)
    }

    // remove all similarProjects from projectsCopy
    projectsCopy = projectsCopy.filter((project) => project.name !== similarProjects.name)

    // select random projects from projectsCopy to fill the rest of the array
    const randomProjects = selectRandomElements(projectsCopy, 3 - similarProjects.length)
    return [...similarProjects, ...randomProjects]
}

function selectRandomElements(array, n) {
    return array.sort(() => 0.5 - Math.random()).slice(0, n);
}