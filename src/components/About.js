import { Box, Button, Container, Typography, Avatar } from '@mui/material';

export default function About() {
    return (
        <Container maxWidth="lg" className="grid grid-cols-2 gap-4 m-auto justify-center">
          <Box sx={{py: 8, display: 'flex', flexDirection: 'column'}}>
            {/* <Avatar
                alt="Peter Wilson"
                src="/TempHeadshot.png"
                sx={{ width: 128, height: 128 }}
            /> */}
            <Typography variant="h2" gutterBottom sx={{mt: 2}}>
                Peter Wilson
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
                Hello! I'm a versatile software engineer with a passion for full-stack development. With expertise in architecting web applications and orchestrating development processes, I enjoy creating innovative solutions that push boundaries. Currently exploring full-stack development with scalable tooling, I thrive on challenges and believe in the power of effective communication and collaboration. Bringing creativity, efficiency, and attention to detail to every project, I'm excited to share my journey with you.
            </Typography>
            <Box sx={{mt: 4}}>
                <Button variant="outlined" color="primary" href="/contact">
                    About Me
                </Button>
            </Box>
          </Box>
          <Box>
            <img src="TempHeadshot.png" alt="Peter Wilson" />
          </Box>
        </Container>
    );
}
