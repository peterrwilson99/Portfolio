import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'

function Project({ project }) {
    const {id, name, date, preview, description, images} = project
    return (
        <Card elevation={0} className="m-auto my-4" sx={{width: 'min(90%,350)'}}>
            <CardActionArea href={"/projects/".concat(id)}>
                <CardMedia
                    sx={{
                        height: 450,
                        transition: 'transform 0.15s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                    image={images[0]}
                    title={name}
                />
                <CardContent>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {preview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Project