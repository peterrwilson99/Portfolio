import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

export interface Tool {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

interface Props {
    tools: Tool[];
}

function TechStackList({ tools }: Props) {
    return (
        <List>
            {tools.map((tool, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>{tool.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={tool.title} secondary={tool.subtitle} />
                </ListItem>
            ))}
        </List>
    );
}

export default TechStackList;
