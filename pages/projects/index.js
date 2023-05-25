import React from 'react'
import { projects } from '../../src/projects/projects'
import { Typography } from '@mui/material'
import ProjectHighlight from '../../src/components/ProjectHighlight'
import Head from 'next/head'

function index() {
    return (
        <main className="pt-12">
            <Head>
                <title>Projects - Peter Wilson</title>
            </Head>
            <div className="my-12">
                <Typography component="h1" variant="h2" align="center" gutterBottom>
                    Projects ✔
                </Typography>
                <Typography component="h5" variant="h5" align="center" gutterBottom>
                    Take a glimpse into some of my personal and professional projects from over the years.
                </Typography>
            </div>
            <ProjectHighlight projects={projects} />
        </main>
    )
}

export default index