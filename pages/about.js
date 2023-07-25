import { Box, Typography } from '@mui/material'
import React from 'react'
import CareerTimeline from '../src/components/CareerTimeline'
import About from '../src/components/About'
import Head from 'next/head'

function about() {
  return (
    <main>
      <Head>
        <title>About - Peter Wilson</title>
      </Head>
      <Box className="mt-24 text-center ">
          <Typography variant="h3" gutterBottom>
              🚧 Under Construction 🚧
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
              This page is still in development, however, if you would like to hear more feel free to contact me 😁
          </Typography>
          {/* <About /> */}
          <CareerTimeline />
      </Box>
    </main>
  )
}

export default about