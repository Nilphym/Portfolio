import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#08FDD8'
    },
    secondary: {
      main: '#202833'
    },
    background: {
      default: '#1D1D1D' //0A192F 202833 1D1D1D
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
