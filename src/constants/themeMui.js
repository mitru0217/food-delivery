import { createTheme } from '@mui/material/styles';
// import { teal, indigo } from '@mui/material/colors';

const baseTheme = createTheme({
    palette: {
    // primary: {
    //   main: '#00a2e5',
    // },
    secondary: {
      main: '#00a2e5',
    },
  },
}); // Создайте базовую тему

const theme = createTheme({
  ...baseTheme,
  typography: {
    h1: {
      fontSize: '2rem',
      color: baseTheme.palette.primary.main,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '1.5rem',
      color: baseTheme.palette.secondary.main,
      textDecoration: 'underline',
      marginBottom: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '1.25rem',
      color: baseTheme.palette.secondary.main,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
      },
    },
    span: {
      color: baseTheme.palette.primary.main,
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
      },
    },
  },
});

export default theme;