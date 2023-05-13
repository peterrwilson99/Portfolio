import React from 'react'
import projects from '../../src/projects.json'
import { Typography } from '@mui/material'
import ProjectHighlight from '../../src/components/ProjectHighlight'

function index() {
    return (
        <main className="pt-12">
            <div className="my-12">
                <Typography component="h1" variant="h2" align="center" gutterBottom>
                    Projects ✔
                </Typography>
                <Typography component="h5" variant="h5" align="center" gutterBottom>
                    Take a glimpse into my coding endeavors as we explore a collection of passion projects.
                </Typography>
            </div>
            <ProjectHighlight projects={projects} />
        </main>
    )
}

export default index