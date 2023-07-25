import React from 'react'
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import { projects } from '../src/projects/projects'
import ProjectHighlight from '../src/components/ProjectHighlight';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import ContactForm from '../src/components/ContactForm';


export default function Index() {
  const theme = useTheme();
  const TwoCol = useMediaQuery(theme.breakpoints.down(1800));
  const OneCol = useMediaQuery(theme.breakpoints.down(1200));
  // only display one row of projects
  

  return (
    <main>
      <Hero />
      {/* <About /> */}
      <ProjectHighlight projects={projects}/>
      {/* <Container maxWidth="md">
        <ContactForm />
      </Container> */}
    </main>
  );
}
