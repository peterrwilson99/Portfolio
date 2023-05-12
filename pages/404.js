import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Link from 'next/link'

function NotFound() {
  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh'
      }}
    >
      <div className="mb-12 text-center">
          <Typography variant="h1" component="h2" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" gutterBottom>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          <Link href="/" passHref>
            <Button variant="outlined">Home</Button>
          </Link>
      </div>
    </Box>
  )
}

export default NotFound
