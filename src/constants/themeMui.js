import { createTheme } from '@mui/material/styles';
import { green,red, indigo } from '@mui/material/colors';

const baseTheme = createTheme({
    palette: {
    primary: {
      main: '#00a2e5',
    },
    secondary: {
      main: red[500],
      text: green[500],
      indigo: indigo[500],
    },
  },
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      desktop: 1000,
    },
  },
}); // Создайте базовую тему

const theme = createTheme({
  ...baseTheme,
  typography: {
    h1: {
      fontSize: '2rem',
      color: baseTheme.palette.primary.main,
 
      [baseTheme.breakpoints.up('desktop')]: {
        fontSize: '3rem',
      }
    },
    h2: {
      fontSize: '1.5rem',
      color: baseTheme.palette.secondary.main,
      textDecoration: 'underline',
      marginBottom: '1rem',
      [baseTheme.breakpoints.up('desktop')]: {
        fontSize: '1.8rem',
      },
    },
    h3: {
      fontSize: '1.25rem',
      color: baseTheme.palette.secondary.main,
      [baseTheme.breakpoints.up('desktop')]: {
        fontSize: '1.6rem',
      },
    },
    h4: {
      fontSize: '1.2rem',
      color: baseTheme.palette.secondary.indigo,
      [baseTheme.breakpoints.up('tablet')]: {
        fontSize: '1.4rem',
      },
      [baseTheme.breakpoints.up('desktop')]: {
        fontSize: '1.8rem',
      },
    },
h5: {
      fontSize: '1rem',
      color: baseTheme.palette.secondary.indigo,
      [baseTheme.breakpoints.up('desktop')]: {
        fontSize: '1.4rem',
      },
},

    span: {
      color: baseTheme.palette.secondary.text,
      fontSize: '1.25rem',
      [baseTheme.breakpoints.up('tablet')]: {
        fontSize: '1.5rem',
      },
      [baseTheme.breakpoints.up('desktop')]: {
        fontSize: '1.6rem',
      },
    },

    spanSecond: {
      color: baseTheme.palette.secondary.text,
      fontSize: '1.4rem',
      [baseTheme.breakpoints.up('tablet')]: {
        fontSize: '1.8rem',
      },
      [baseTheme.breakpoints.up('desktop')]: {
        fontSize: '2rem',
      },

    }
  },
});



export default theme;