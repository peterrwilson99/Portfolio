import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

function TechStackList({ tools }) {
    return (
        <List>
            {tools.map((tool, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            {tool.icon}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={tool.title} secondary={tool.subtitle} />
                </ListItem>   
            ))}
        </List>
    )
}

export default TechStackList;