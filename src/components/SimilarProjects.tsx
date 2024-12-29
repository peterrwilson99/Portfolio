import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function SimilarProjects({ projects }) {
    return (
        <div>
            <Typography variant="h4" component="h2" className=" my-8 mb-4">
                Similar Projects
            </Typography>
            <div className="flex flex-row flex-wrap justify-start">
                {projects.map((project, index) => {
                    return (
                        <Card elevation={0} key={index} className="m-4" sx={{ maxWidth: 350, minWidth: 150 }}>
                            <CardActionArea href={"/projects/".concat(project.name.toLowerCase().split(" ").join("-"))}>
                                <CardMedia
                                    sx={{
                                        height: 250,
                                        transition: "transform 0.15s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                    image={project.images[0]}
                                    title={project.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.preview}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default SimilarProjects;
