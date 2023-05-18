import React from 'react'
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import { projects } from '../src/projects/projects'
import ProjectHighlight from '../src/components/ProjectHighlight';
import { useMediaQuery, useTheme } from '@mui/material';


export default function Index() {
  const theme = useTheme();
  const TwoCol = useMediaQuery(theme.breakpoints.down(1800));
  const OneCol = useMediaQuery(theme.breakpoints.down(1200));
  // only display one row of projects
  const numProjects = OneCol ? 1 : TwoCol ? 2 : 3 

  return (
    <main>
      <Hero />
      <ProjectHighlight projects={projects.slice(0, numProjects)} viewAll={true} />
      <About />
    </main>
  );
}
