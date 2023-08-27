import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
import { theme } from './constants/theme';
// const WelComePage = lazy(() => import('./pages/wellComePage'));
import WelComePage from './pages/wellComePage';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WelComePage />
    </ThemeProvider>
  );
};

export default App;
