import React from 'react'
import projects from '../projects.json'
import { Box, Button, Typography } from '@mui/material'
import Project from './Project'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProjectHighlight() {

    return (
        <Box className="w-3/4 m-auto">
            <div className="grid grid-cols-3 gap-4">
                <Project project={projects[0]} />
                <Project project={projects[1]} />
                <Project project={projects[2]} />
            </div>
            <div className='text-right my-4'>
                <Button endIcon={<ArrowRightAltIcon/>} variant="outlined" color="primary" href="/projects">
                    View All Projects
                </Button>
            </div>
        </Box>
    )
}

export default ProjectHighlight