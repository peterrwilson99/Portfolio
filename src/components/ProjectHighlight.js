import React from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import Project from './Project'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProjectHighlight({ projects, viewAll }) {
    const theme = useTheme();
    const TwoCol = useMediaQuery(theme.breakpoints.down(1800));
    const OneCol = useMediaQuery(theme.breakpoints.down(1200));
    let cols = OneCol ? 1 : TwoCol ? 2 : 3;
    console.log(cols)
    
    return (
        <Box className={`${OneCol ? 'w-[90%]' : 'w-3/4'} m-auto`}>
            <div className={OneCol ? 'm-auto' : `grid grid-cols-${cols} gap-4`}>
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