import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <Container className="h-[75vh] mt-8 flex items-center justify-center" maxWidth="xl">
        <div className="mr-4 text-center mb-8">
            <Typography
                variant="h2"
                component="h1"
            >
                Hi 👋 I'm Peter Wilson
            </Typography>
            <Typography
                variant="h3"
                component="h2"
                color="text.secondary"
                gutterBottom
            >
                <Typewriter
                    options={{
                        strings: ['a Developer', 'an Engineer', ''],
                        autoStart: true,
                        loop: true,
                        pauseFor: 2000
                    }}
                />
            </Typography>
            <Typography
                variant="body1"
                component="p"
                sx={{maxWidth: 750}}
            >
                Welcome to my corner of the web. I'm Peter Wilson, a Software Engineer with a passion
                for all things development. Whether it's crafting stunning designs, writing efficient code, or bringing
                ideas to life, I love diving into exciting projects.
            </Typography>
            <div className="mt-4">
                <Button className="mr-2 my-2" href="#" color="secondary" variant="contained" onClick={() => window.open('/files/resume.pdf')}>
                    Resume
                </Button>
                <Button className="mx-2 my-2" href="/projects" variant="outlined">
                    Projects
                </Button>
            </div>
        </div>
    </Container>
  )
}

export default Hero
