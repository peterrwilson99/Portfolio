import { Box, Button, Container, Typography, Avatar } from '@mui/material';

export default function About() {
    return (
        <Container maxWidth="lg" className="grid grid-cols-2 gap-4 m-auto justify-center">
          <Box sx={{py: 8, display: 'flex', flexDirection: 'column'}}>
            <Avatar
                alt="Peter Wilson"
                src="/TempHeadshot.png"
                sx={{ width: 128, height: 128 }}
            />
            <Typography variant="h2" gutterBottom sx={{mt: 2}}>
                Peter Wilson
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
                A brief introduction about yourself. This could include your professional background, your main skills, what you're currently learning or working on, and anything else you think would be useful or interesting for visitors to your portfolio.
            </Typography>
            <Box sx={{mt: 4}}>
                <Button variant="contained" color="primary" href="/resume" sx={{mr: 2}}>
                    View Resume
                </Button>
                <Button variant="outlined" color="secondary" href="/contact">
                    Contact Me
                </Button>
            </Box>
          </Box>
          <Box>
            <img src="TempHeadshot.png" alt="Peter Wilson" />
          </Box>
        </Container>
    );
}
