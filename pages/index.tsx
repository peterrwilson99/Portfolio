import React from "react";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import { projects } from "../src/projects/projects";
import ProjectHighlight from "../src/components/ProjectHighlight";

export default function Index() {
    return (
        <main>
            <Hero />
            <About />
            <ProjectHighlight projects={projects} />
        </main>
    );
}
