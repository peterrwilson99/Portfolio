import { Box } from "@mui/material";
import React from "react";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function AboutCarousel() {
    const aboutImages = ["/enzo.jpg", "/trialsbike.jpg", "/powerlifting.gif", "/snowboarding.png"];

    return (
        <Box className="w-full">
            {/* <Carousel
                autoPlay
                infiniteLoop
                interval={7000}
                transitionTime={1000}
                showThumbs={false}
                showStatus={false}
            
            >
                {aboutImages.map((image, index) => (
                    <Box key={index} className="m-auto" sx={{height: '450px', width: '450px', backgroundImage: `url('${image}')`, backgroundPosition: 'right', backgroundSize: 'cover', borderRadius: 4}}>
                    </Box>
                ))}
            </Carousel> */}
        </Box>
    );
}

export default AboutCarousel;
