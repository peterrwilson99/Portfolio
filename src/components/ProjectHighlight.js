import React from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Project from './Project'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProjectHighlight({ projects, viewAll }) {
    const theme = useTheme();
    const TwoCol = useMediaQuery(theme.breakpoints.down(1800));
    const OneCol = useMediaQuery(theme.breakpoints.down(1200));
    
    return (
        <Box className={`${OneCol ? 'w-[90%]' : 'w-3/4'} m-auto`}>
            <div className={OneCol ? 'm-auto' : TwoCol ? `grid grid-cols-2 gap-4`: `grid grid-cols-3 gap-4`}>
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