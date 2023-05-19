import React from 'react'
import Timeline from '@mui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BiotechIcon from '@mui/icons-material/Biotech';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Box, Paper, Typography } from '@mui/material';

const events = [
    {
        title: 'Started at the University of Victoria',
        date: 'September 2018',
        description: 'I started my journey at the University of Victoria in Engineering, began by learning C and the engineering design process. I was excited to start my journey in engineering and was looking forward to the opportunities that would come my way.',
        icon: <LibraryBooksIcon />,
    },
    {
        title: 'Declared into Software Engineering',
        date: 'April 2019',
        description: 'Declared into software engineering after my first year of engineering. after introductory C class spiking my interest in programatically problem solving.',
        icon: <TerminalIcon />,
    },
    {
        title: 'Created a Sudoku Solver in Java',
        date: 'October 2019',
        description: 'In my spare time in Introduction to Java I created a sudoku solver using a variety of algorithms to test my understanding.',
        icon: <AccountTreeIcon />,
    },
    {
        title: 'First Co-op with Energy In Cities Research Group',
        date: 'September 2020',
        description: 'I started my first co-op as a research assistant with the Energy In Cities Research Group. I was excited to start my journey in engineering and was looking forward to the opportunities that would come my way.',
        icon: <BiotechIcon />,
    },
    {
        title: 'Second Co-op with Energy In Cities Research Group',
        date: 'January 2021',
        description: 'I started my first co-op as a research assistant with the Energy In Cities Research Group. I was excited to start my journey in engineering and was looking forward to the opportunities that would come my way.',
        icon: <BiotechIcon />,
    },
    
]

function CareerTimeline() {
    return (
        <Timeline position="alternate">
            {events.map(({title, date, description, icon}, index) => (
                <TimelineItem sx={{minHeight: '250px'}}>
                    <TimelineOppositeContent color="text.secondary">
                        {date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color={index % 2 === 0 ? "primary" : 'secondary'}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box className="p-4" sx={{borderRadius: 5}}>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                            <Typography variant="p">
                                {description}
                            </Typography>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}

export default CareerTimeline