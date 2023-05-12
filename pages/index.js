import React from 'react'
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import ProjectHighlight from '../src/components/ProjectHighlight';


export default function Index() {
  
  return (
    <main>
      <Hero />
      <ProjectHighlight />
      <About />
    </main>
  );
}
