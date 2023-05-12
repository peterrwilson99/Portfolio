import React from 'react'
import projects from '../../src/projects.json'

function ProjectView({ project }) {
    const {id, name, date, preview, description, images} = project
    return (
        <main className="pt-12">
            {name}
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