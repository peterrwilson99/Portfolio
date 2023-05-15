import React from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Project from './Project'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProjectHighlight({ projects, viewAll }) {
    const theme = useTheme();
    
    return (
        <Box className='m-auto'>
            <div className='flex flex-wrap flex-row gap-4'>
                {projects.map((project) => (<Project className="m-auto" project={project} />))}
            </div>
            {viewAll ? 
                <div className='text-right my-4'>
                    <Button endIcon={<ArrowRightAltIcon/>} variant="outlined" color="primary" href="/projects">
                        View All Projects
                    </Button>
                </div>
                :
                <></>
            }
        </Box>
    )
}

export default ProjectHighlight