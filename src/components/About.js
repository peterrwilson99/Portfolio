import { Box, Button, Container, Typography, Avatar, styled, Collapse, Tooltip, IconButton, useTheme, useMediaQuery } from '@mui/material';
import IconGallery from './IconGallery';
import SlideIn from './SlideIn';
import AboutCarousel from './AboutCarousel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import VisibilitySensor from 'react-visibility-sensor';
import { useEffect, useState } from 'react';


export default function About() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [firstRender, setFirstRender] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleExpandClick = () => {
        setOpen(!open);
        if (firstRender) setFirstRender(false);
    };

    useEffect(() => {
        if (isVisible) {
            setFirstRender(true);
            const timeoutId = setTimeout(() => {
                setFirstRender(false);
            }, 3000);

            // Clear the timeout when the component unmounts
            return () => clearTimeout(timeoutId);
        }
    }, [isVisible])

    const onVisibilityChange = (isVisible) => {
        setIsVisible(isVisible);
    };


    const AboutMeSection = styled(Box)(({ theme }) => ({
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            minHeight: 'unset',
        },
    }));
    
    
    return (
        <Container maxWidth="xl" className="mb-12">
            <SlideIn>
                <AboutMeSection>
                    <Container maxWidth="lg" className={isSmallScreen ? "m-auto justify-center text-center" : "grid grid-cols-2 gap-5 m-auto justify-center"}>
                      <Box className="py-6 flex flex-col justify-center">
                        <Typography variant="h2" gutterBottom sx={{mt: 2}}>
                            About Me
                        </Typography>
                        {isSmallScreen ? <Avatar sx={{width: isSmallScreen ? "300px" : "400px", height: isSmallScreen ? "300px" : "400px"}} src="/TempHeadshot.png" className="mb-8" /> : null}
                        <Typography variant="body1" className="text-xl" color="text.secondary" paragraph>
                            Hello! I'm Peter Wilson, a Full-Stack Software Engineer based in beautiful Victoria, British Columbia. From a young age, I've been captivated by the transformative power of technology and programming, which led me to pursue a career in software development. I am a soon-to-be graduate of the University of Victoria's Software Engineering program.
                        </Typography>
                      </Box>
                      {isSmallScreen ? <></>
                        :
                        <Box className={isSmallScreen ? "text-center m-auto": "flex justify-end align-middle items-center"}>
                            <Avatar sx={{width: isSmallScreen ? "300px" : "400px", height: isSmallScreen ? "300px" : "400px"}} src="/TempHeadshot.png"/>
                        </Box>
                      }
                    </Container>
                </AboutMeSection>
            </SlideIn>
            <Collapse in={open} timeout="auto" unmountOnExit>            
                <SlideIn>
                    <AboutMeSection>
                        <Box>
                            <Container maxWidth="md" className="m-auto text-center">
                                <Typography variant="h2" gutterBottom sx={{mt: 2}}>
                                    My Skills
                                </Typography>
                                <Typography variant="body1" className="text-xl text-center" color="text.secondary" paragraph>
                                    Professionally, I specialize in JavaScript, ReactJS, Express.js, Next.js, and Python, among others. I love diving into challenging projects, creating clean, maintainable code, and finding innovative solutions. My background in sales has equipped me with a unique perspective in understanding and meeting user requirements and working in teams.
                                </Typography>
                            </Container>
                            <Container maxWidth="lg" className="m-auto text-center mt-12">
                                <IconGallery />
                            </Container>
                        </Box>
                    </AboutMeSection>
                </SlideIn>
                <SlideIn>
                    <AboutMeSection>
                        <Container maxWidth="lg" className={isSmallScreen ? "flex flex-col-reverse text-center" : "grid grid-cols-2 gap-5 m-auto justify-center text-right"}>
                            <Box className="flex md:justify-end align-middle items-center">
                                <AboutCarousel />
                            </Box>
                            <Box className="py-6 flex flex-col justify-center ">
                                <Typography variant="h2" gutterBottom sx={{mt: 2}}>
                                    Beyond the Office
                                </Typography>
                                <Typography variant="body1" className="text-xl" color="text.secondary" paragraph>
                                    Beyond the world of code, there's a lot more to me. I love powerlifting, going snowboarding, and playing basketball. I have been riding motorcycles since I was 6 years old, and nowadays I ride trials and sport bikes. I also enjoy wrenching on cars, and I'm currently working on a 2002 BMW 330i. I love walking my puppy, a 5-month-old Chocolate Labrador.
                                </Typography>
                            </Box>
                        </Container>
                    </AboutMeSection>
                </SlideIn>
            </Collapse>
            <div className="text-right">
                <VisibilitySensor onChange={onVisibilityChange}>
                    <Tooltip title={open ? "See Less About Me" : "See More About Me"} open={firstRender}>
                        <IconButton
                            onClick={handleExpandClick}
                            aria-expanded={open}
                            aria-label="show more"
                        >
                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </Tooltip>
                </VisibilitySensor>
            </div>
        </Container>
    );
}
