import React, { useState } from "react";
import { Icons } from "./GetChip";
import { Box, ButtonBase, Tooltip, useMediaQuery, useTheme } from "@mui/material";

function IconDisplay() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const iconHeight = matches ? "50px" : "80px";

    const [hoveredIndexes, sethoveredIndexes] = useState([]);

    const handleMouseOver = (index) => {
        if (hoveredIndexes.includes(index)) return;
        sethoveredIndexes([...hoveredIndexes, index]);
    };

    const handleMouseOut = (index) => {
        setTimeout(() => {
            if (!hoveredIndexes.includes(index)) return;
            sethoveredIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
        }, 800);
    };

    return (
        <Box className="w-full">
            <Box className="flex flex-wrap justify-center gap-6">
                {Icons.map((item, index) => {
                    const ItemComponent = React.cloneElement(item.icon, { style: { height: iconHeight, width: iconHeight } });
                    return (
                        <Box key={index} className={`text-center scaleTransition ${hoveredIndexes.includes(index) ? "scaleOnHover" : ""}`}>
                            <Tooltip title={item.name}>
                                <ButtonBase onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)}>
                                    {ItemComponent}
                                </ButtonBase>
                            </Tooltip>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default IconDisplay;
