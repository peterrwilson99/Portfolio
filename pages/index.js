import React from 'react'
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import projects from '../src/projects.json'
import ProjectHighlight from '../src/components/ProjectHighlight';


export default function Index() {
  
  return (
    <main>
      <Hero />
      <ProjectHighlight projects={projects.slice(0, 3)} viewAll={true} />
      {/* <About /> */}
    </main>
  );
}
