import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import GetChip from "./GetChip";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import SlideIn from "./SlideIn";

function Project({ project }) {
    const { id, name, date, preview, description, images, tags } = project;

    return (
        <SlideIn>
            <Card elevation={0} className="m-auto w-full my-8" sx={{ maxWidth: 750, minWidth: 350 }}>
                <CardActionArea href={"/projects/".concat(name.toLowerCase().split(" ").join("-"))}>
                    <CardMedia
                        sx={{
                            height: 450,
                            transition: "transform 0.15s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.05)",
                            },
                        }}
                        image={images[0]}
                        title={name}
                    />
                    <CardContent sx={{ display: "flex", flexDirection: "column", minHeight: "175px" }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                {date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {preview}
                            </Typography>
                        </Box>
                        <Box>{tags.map((tag, index) => GetChip(tag, index))}</Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </SlideIn>
    );
}

export default Project;
