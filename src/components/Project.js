import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import GetChip from './GetChip'

function Project({ project }) {
    const {id, name, date, preview, description, images, tags} = project
    return (
        <Card elevation={0} className="m-auto w-full my-8" sx={{maxWidth: 750, minWidth: 350}}>
            <CardActionArea href={"/projects/".concat(name.toLowerCase().split(" ").join("-"))}>
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
                    <Typography variant="body2" color="text.secondary" flexGrow>
                        {preview}
                    </Typography>
                    {tags.map(tag => GetChip(tag))}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Project