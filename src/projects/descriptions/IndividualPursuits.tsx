import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import IconNextjs from "../../components/icons/IconNext";
import IconPrisma from "../../components/icons/IconPrisma";
import IconExpress from "../../components/icons/IconExpress";
import IconMui from "../../components/icons/IconMui";
import TechStackList, { Tool } from "../TechStackList";
import IconPostgres from "../../components/icons/IconPostgres";
import IconDigitalOcean from "../../components/icons/IconDigitalOcean";

function IndividualPursuits() {
    const tools: Tool[] = [
        {
            title: "Next.js",
            subtitle: "Frontend Framework",
            icon: <IconNextjs />,
        },
        {
            title: "DigitalOcean",
            subtitle: "Cloud Hosting",
            icon: <IconDigitalOcean />,
        },
        {
            title: "Material UI",
            subtitle: "React Component Library",
            icon: <IconMui />,
        },
        {
            title: "Express.js",
            subtitle: "Backend Framework built with TypeScript",
            icon: <IconExpress />,
        },
        {
            title: "Prisma",
            subtitle: "Object-relational mapping tool for TypeScript",
            icon: <IconPrisma />,
        },
        {
            title: "PostgreSQL",
            subtitle: "Relational Database",
            icon: <IconPostgres />,
        },
    ];
    return (
        <div>
            <Typography variant="subtitle1" className="text-center mb-4">
                Please note all names and identifying information in application screenshots are generated names not linking to actual individuals.
            </Typography>
            <Typography variant="h6">Problem Background and Project Description</Typography>
            <Typography variant="body1">
                Individual Pursuits is a community social services organization specializing in both residential supports and community inclusion programs for
                persons with a developmental disability. For goal tracking, they use a paper-based system that is difficult to maintain and track. The goal of
                this project is to create a web application that will allow staff to track goals and progress for each individual.
            </Typography>
            <Typography variant="body1" className="mt-4">
                The web application will allow staff to create goals for each client and track their progress based on their goals. The application had to meet
                FOIPPA security requirements as this application will be storing personal information. The application will have role based access control to
                ensure that only specific staff can access pertinent information
            </Typography>
            <Divider className="my-4" />
            <Typography variant="h6">Elicitation Phase</Typography>
            <Typography variant="body1">
                I initially met with business stakeholders to gather requirements and create a project plan over a year before development began. As the scope
                of the project was broad I drafted a Requirements Specification Document that was chipped away at in weekly meetings. These meetings consisted
                of myself and two business stakeholders. The document carefully outlined the different user roles and permissions, use cases and user stories,
                basic wireframes, and ER diagrams. The document was updated as the project progressed and was expected to be used as a reference for the
                development team.
            </Typography>
            <Divider className="my-4" />
            <Typography variant="h6">Development Phase</Typography>
            <Typography variant="body1">
                The development team was comprised of myself, along with another student from my program I had worked with previously on school projects and had
                a valuable skillset for the project. I split the development tasks into four sprints, each lasting two weeks. There was also weekly meetings
                with stakeholders, and daily standups with the developers to ensure that the project was on track. The initial prototype was completed within
                the expected timeframe. The project was then deployed locally on the company network, where it was tested by the business stakeholders.
            </Typography>
            <Grid container spacing={2} className="mt-4">
                <Grid item xs={12} md={5}>
                    <TechStackList tools={tools} />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography variant="body1" className="mt-4">
                        The frontend was built using Next.js, a React framework with built-in routing and server-side rendering capabilities, along with
                        Vercel's simple and cost effective deployment features. Material UI was used as the component library for the frontend for its ease of
                        use and familiar design for end users.
                    </Typography>
                    <Typography variant="body1" className="mt-4">
                        The backend was built using Express.js, a Node.js framework with TypeScript utilizing REST. The application uses an in-house
                        authentication system harnessing JWT (JSON Web Tokens) for secure authentication. The system supports role-based access control to
                        ensure that only authorized staff can access pertinent information, and includes API access management that can be created and
                        configured through the UI.
                    </Typography>
                    <Typography variant="body1" className="mt-4">
                        The database was built using PostgreSQL, a relational database. Prisma was used as an ORM to simplify database interactions and to
                        ensure that the database schema was consistent with the application schema.
                    </Typography>
                </Grid>
            </Grid>
            <Divider className="my-4" />
            <Typography variant="h6">Project Status</Typography>
            <Typography variant="body1">
                The application is now deployed on DigitalOcean and is being used regularly by several group homes. The system has successfully replaced the
                paper-based goal tracking system and provides staff with an efficient way to track goals and progress for each individual.
            </Typography>
        </div>
    );
}

export default IndividualPursuits;
