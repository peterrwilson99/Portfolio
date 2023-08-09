import React from 'react';
import CarouselDesktop from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icons } from './GetChip';
import { Box, ButtonBase, Tooltip, useMediaQuery, useTheme } from '@mui/material';

const IconGallery = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        matches ?
            <Box sx={{maxWidth: "100%"}}>
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={2000}
                    transitionTime={1000}
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                >
                    {Icons.map((item, index) => {
                        const ItemComponent = React.cloneElement(
                            item.icon,
                            { style: { height: '150px', width: '150px' }}
                        );
                        return (
                        <Box key={index} className="text-center">
                            <Tooltip title={item.name}>
                                <ButtonBase  >
                                    {ItemComponent}
                                </ButtonBase>
                            </Tooltip>
                        </Box>
                    )})}
                </Carousel>
            </Box>
            :
            <CarouselDesktop 
                responsive={responsive}
                arrows={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={0}
                transitionDuration={1500}
            >
                {Icons.map((item, index) => {
                    const ItemComponent = React.cloneElement(
                        item.icon, 
                        { style: { height: '150px', width: '150px' }}
                    );
                    return (
                    <Box key={index} className="text-center">
                        <Tooltip title={item.name}>
                            <ButtonBase  >
                                {ItemComponent}
                            </ButtonBase>
                        </Tooltip>
                    </Box>
                )})}
            </CarouselDesktop>
    );
};

export default IconGallery;
