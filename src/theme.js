import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2D7DD2',
    },
    secondary: {
      main: '#4c1c62',
    },
    error: {
      main: red.A400,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2D7DD2',
    },
    secondary: {
      main: '#4c1c62',
    },
    error: {
      main: red.A400,
    },
  },
});

export default lightTheme;