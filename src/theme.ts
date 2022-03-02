import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#08FDD8'
    },
    secondary: {
      main: '#2A2A2A'
    },
    background: {
      paper: '#1D1D1D',
      default: '#1D1D1D'
    },
    text: {
      primary: '#fff'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'Work Sans, sans-serif'
    }
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});
