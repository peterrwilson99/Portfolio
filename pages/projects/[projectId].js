import { Button, Container, Typography } from '@mui/material';
import React from 'react'
import ImageGallery from '../../src/components/ImageGallery';
import projects from '../../src/projects.json'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function ProjectView({ project }) {
    const {id, name, date, preview, description, images, website, github} = project
    const formattedDescription = description.split('\n').map((paragraph, index) => (
        <Typography
            variant="body1"
            className="text-lg"
            gutterBottom
            key={index}
        >
            {paragraph}
        </Typography>
    ));
    return (
        <main className="pt-12">
            <Container maxWidth="md">
                <ImageGallery images={images} className="my-4" />
                <Typography
                    variant="h3"
                    component="h2"
                >
                    {name}
                </Typography>
                <div className="flex flex-row justify-between w-full mb-4">
                    <div className="align-center flex flex-col justify-center">
                        <Typography
                            variant="subtitle2"
                        >
                            {date}
                        </Typography>
                    </div>
                    <div className='text-right'>
                        {github ? 
                            <Button variant="outlined" endIcon={<GitHubIcon />} onClick={() => window.open(github)}>
                                View GitHub
                            </Button>
                            :
                            <></>
                        }
                        {website ? 
                            <Button className="ml-2" variant="outlined" endIcon={<LanguageIcon />} onClick={() => window.open(website)}>
                                View Website
                            </Button>
                            :
                            <></>
                        }
                    </div>
                </div>
                {formattedDescription}
            </Container>
        </main>
    )
}

export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: { projectId: project.id },
    }));
  
    return { paths, fallback: false };
}
  
export async function getStaticProps({ params }) {
    const project = projects.find((project) => project.id === params.projectId);
    return { props: { project } };
}

export default ProjectView