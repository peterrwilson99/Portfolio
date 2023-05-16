import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  Box,
  ButtonBase,
  Toolbar,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';

function Navigation() {
  const theme = useTheme();
  const gradientColor = alpha(theme.palette.background.default, 1);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backgroundImage: `linear-gradient(${gradientColor}, transparent)`,
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Box sx={{ flexGrow: 1 }}>
          <ButtonBase href="/">
            <Typography variant="h6" noWrap color='text'>
              Peter Wilson
            </Typography>
          </ButtonBase>
        </Box>
        <nav>
            <ButtonBase href="/about" sx={{ my: 1, mx: 1.5 }}>
                <Typography className="font-medium" color='text'>
                  About
                </Typography>
            </ButtonBase>
            <ButtonBase href="/projects" sx={{ my: 1, mx: 1.5 }}>
                <Typography className="font-medium" color='text'>
                  Projects
                </Typography>
            </ButtonBase>
            <ButtonBase href="/contact" sx={{ my: 1, mx: 1.5 }}>
                <Typography className="font-medium" color='text'>
                  Contact
                </Typography>
            </ButtonBase>
        </nav>
    </Toolbar>
  </AppBar>
  );
}

export default Navigation;
