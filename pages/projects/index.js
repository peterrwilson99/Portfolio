import React from 'react'
import projects from '../../src/projects.json'
import { Box, Container, Typography } from '@mui/material'
import Project from '../../src/components/Project'

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
            <Box className="w-3/4 m-auto">
                <div className="grid grid-cols-3 gap-4">
                    {projects.map((project) => {
                        return <Project project={project} />
                    })}
                </div>
            </Box>
        </main>
    )
}

export default index