import React from 'react'
import Timeline from '@mui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BiotechIcon from '@mui/icons-material/Biotech';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TerminalIcon from '@mui/icons-material/Terminal';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import IconPypi from './icons/IconPypi';
import IconReact from './icons/IconReact';
import IconNext from './icons/IconNext';
import { Box, Button, Container, Paper, Typography } from '@mui/material';

const events = [
    {
        title: 'Started at the University of Victoria',
        date: 'September 2018',
        description: 'I started my journey at the University of Victoria in Engineering, began by learning C and the engineering design process. I was excited to start my journey in engineering and was looking forward to the opportunities that would come my way.',
        icon: <LibraryBooksIcon />,
    },
    {
        title: 'Declared into Software Engineering',
        date: 'April 2019',
        description: 'Declared into software engineering after my first year of engineering. after introductory C class spiking my interest in programatically problem solving.',
        icon: <TerminalIcon />,
    },
    {
        title: 'First Co-op with Energy In Cities Research Group',
        date: 'September 2020',
        description: 'I started my first co-op as a research assistant with the Energy In Cities Research Group. I worked in Python maintaining the BESOS codebase and assisting researchers in their work. Most of my first co-op was spent correcting existing errors in the codebase and assisting researchers to use BESOS to prepare datasets for machine learning.',
        icon: <BiotechIcon />,
    },
    {
        title: 'Created the UVIC Term Timeline Creator',
        date: 'November 2020',
        description: 'Created a python application to help students plan what terms to schedule courses in based on offering dates and course weights. Included a ReadTheDocs site and local PyPi package installation. Read more about this project in the projects section.',
        link: '/projects/uvic-term-timeline-creator',
        icon: <CalendarMonthIcon />,
    },
    {
        title: 'Second Co-op with Energy In Cities Research Group',
        date: 'January 2021',
        description: 'I signed an additional contract with the Energy In Cities group after my first co-op term, which resulted in a very effective and productive work term. This term I succesfully created a new weather module to allow researchers to modify weather data for their simulations. I also created a documentation automation that synced multiple repositories content to a single ReadTheDocs page.',
        icon: <BiotechIcon />,
    },
    {
        title: 'Created the IDF Updater PyPi Package',
        date: 'April 2021',
        description: 'While working for Energy In Cities I developed the IDF Updater package which is still available on PyPi. Read more about this project in the projects section.',
        link: '/projects/intermediate-data-format-(idf)-file-updater',
        icon: <IconPypi className="text-2xl" />,
    },
    {
        title: 'Co-op with Regroove Solutions',
        date: 'May 2021',
        description: 'My third co-op with Regroove Solutions was my introduction to web development. I started with internal SharePoint development, then moved to working on the company PHP WordPress site and client WordPress sites.',
        icon: <LanguageIcon />,
    },
    {
        title: 'Created My First Personal React Application',
        date: 'September 2021',
        description: 'Created my first personal react application which I hosted on Firebase. Consisted of a simple sudoku application built using create-react-app and basic React components. Read more about this project in the projects section.',
        link: '/projects/sudoku',
        icon: <IconReact className="text-2xl" />,
    },
    {
        title: 'Began Requirements Elicitation for Individual Pursuits',
        date: 'October 2021',
        description: 'Began requirements elicitation for Individual Pursuits with myself and the two application stakeholders. The project was to create a data entry application for people with developmental disablities to track their progress in their programs. The application was to be security compliant and provide a simple user interface for data entry.',
        icon: <AccountTreeIcon />,
    },
    {
        title: 'Created My First Next.js Project',
        date: 'August 2022',
        description: "Created Miguel Manguerra's personal website using Next.js and Vercel. I was originally working on a vanilla HTML, CSS, JavaScript website and realized deployment would be much more simple with Vercel, and Next.js was a much more useful skill. The first edition of the portfolio took just over two days to create, and is now mobile responsive and provides Miguel with a simple way of adding projects. Read more about this project in the projects section.",
        link: "/projects/miguel-manguerra's-portfolio",
        icon: <IconNext className="text-2xl" />,
    },
    {
        title: 'Co-op with Individual Pursuits',
        date: 'September 2022',
        description: "For my fourth co-op I was hired by Individual Pursuits to create a data entry application for people with developmental disablities to track their progress in their programs. I found a teammate to reccomend to the company to be hired as a second co-op student, and we began working on the project that we had spent the last 11 months planning. By the end of the co-op, a first version was completed and soon after deployed on a company network to begin user-testing.",
        icon: <IntegrationInstructionsIcon />,
    },
    {
        title: 'Created Quizzie',
        date: 'February 2023',
        description: "Created a quiz application to prepare for midterms when there were no practice midterms offered. A simple Next.js application that uses a JSON file to store questions and answers, with questions generated by ChatGPT. Read more about this project in the projects section.",
        link: "/projects/quizzie",
        icon: <QuizIcon />,
    },
    {
        title: 'Graduated from the University of Victoria',
        date: 'August 2023',
        description: "At least I should be graduated by then 😬",
        icon: <SchoolIcon />,
    },
]

function CareerTimeline() {
    return (
        <Container maxWidth="lg">
            <Timeline position="alternate">
                {events.map(({title, date, description, icon, link}, index) => (
                    <TimelineItem key={index} sx={{minHeight: '250px'}}>
                        <TimelineOppositeContent color="text.secondary">
                            {date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color={index % 2 === 0 ? "primary" : 'secondary'}>
                            {icon}
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box className="pb-4 px-4" sx={{borderRadius: 5}}>
                                <div>
                                    <Typography variant="h6">
                                        {title}
                                    </Typography>
                                    <Typography variant="p">
                                        {description}
                                    </Typography>
                                </div>
                                {link ?
                                    <Button className="mt-2" variant="contained" display='block' color={index % 2 === 0 ? "primary" : 'secondary'} href={link}>
                                        Read More
                                    </Button>
                                    :
                                    <></>
                                }
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Container>
    )
}

export default CareerTimeline