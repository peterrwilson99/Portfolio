import React, { useEffect, useState } from 'react'
import { Box, Button, useMediaQuery, useTheme, Collapse, Tooltip } from '@mui/material'
import Project from './Project'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import VisibilitySensor from 'react-visibility-sensor';


function ProjectHighlight({ projects, showAll }) {
    const theme = useTheme();
    const TwoCol = useMediaQuery(theme.breakpoints.down(1800));
    const OneCol = useMediaQuery(theme.breakpoints.down(1200));
    const numProjects = OneCol ? 1 : TwoCol ? 2 : 3 
    const [open, setOpen] = useState(false);
    const [firstRender, setFirstRender] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleExpandClick = () => {
        setOpen(!open);
        if (firstRender) setFirstRender(false);
    };

    useEffect(() => {
        if (isVisible) {
            setFirstRender(true);
            const timeoutId = setTimeout(() => {
                setFirstRender(false);
            }, 3000);

            // Clear the timeout when the component unmounts
            return () => clearTimeout(timeoutId);
        }
    }, [isVisible])

    const onVisibilityChange = (isVisible) => {
        setIsVisible(isVisible);
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
                    {projects.slice(numProjects).map((project, index) => (<Project className="m-auto" key={index+3} project={project} />))}
                </div>
            </Collapse>
            <div className="text-right">
                <VisibilitySensor onChange={onVisibilityChange}>
                    <Tooltip title={open ? "See Less Projects" : "See More Projects"} open={firstRender}>
                        <IconButton
                            onClick={handleExpandClick}
                            aria-expanded={open}
                            aria-label="show more"
                        >
                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </Tooltip>
                </VisibilitySensor>
            </div>
        </Box>
    )
}

export default ProjectHighlight
