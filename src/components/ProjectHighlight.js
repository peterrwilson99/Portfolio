import React, { useState } from 'react'
import { Box, Button, useMediaQuery, useTheme, Collapse, Tooltip } from '@mui/material'
import Project from './Project'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

function ProjectHighlight({ projects, showAll }) {
    const theme = useTheme();
    const TwoCol = useMediaQuery(theme.breakpoints.down(1800));
    const OneCol = useMediaQuery(theme.breakpoints.down(1200));
    const numProjects = OneCol ? 1 : TwoCol ? 2 : 3 
    const [open, setOpen] = useState(false);

    const handleExpandClick = () => {
        setOpen(!open);
    };

    return (
        showAll ? 
            <Box className={`${OneCol ? 'w-[90%]' : 'w-3/4'} m-auto`}>
                <div className={OneCol ? 'm-auto' : TwoCol ? `grid grid-cols-2 gap-4`: `grid grid-cols-3 gap-4`}>
                    {projects.map((project, index) => (<Project className="m-auto" key={index} project={project} />))}
                </div>
            </Box>
        :
        <Box className={`${OneCol ? 'w-[90%]' : 'w-3/4'} m-auto`}>
            <div className={OneCol ? 'm-auto' : TwoCol ? `grid grid-cols-2 gap-4`: `grid grid-cols-3 gap-4`}>
                {projects.slice(0, numProjects).map((project, index) => (<Project className="m-auto" key={index} project={project} />))}
            </div>


            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className={OneCol ? 'm-auto' : TwoCol ? `grid grid-cols-2 gap-4`: `grid grid-cols-3 gap-4`}>
                    {projects.slice(3).map((project, index) => (<Project className="m-auto" key={index+3} project={project} />))}
                </div>
            </Collapse>
            <div className="text-right">
                <Tooltip title={open ? "See Less" : "See More"}>
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={open}
                        aria-label="show more"
                    >
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Tooltip>
            </div>
        </Box>
    )
}

export default ProjectHighlight
