// import  { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './constants/theme';
import Loader from './components/Loader/Loader';
const WelComePage = lazy(() => import('./pages/wellComePage'));
const HomePage = lazy(() => import('./pages/homePage'));

const App = () => {
  // const [localStorageCleared, setLocalStorageCleared] = useState(false);

  // useEffect(() => {
  //   const clearLocalStorageOnUnload = (e) => {
  //     if (!localStorageCleared) {
  //       e.preventDefault();
  //       e.returnValue = '';
  //       // Очистить localStorage только если это первый раз
  //       localStorage.clear();
  //       setLocalStorageCleared(true);
  //     }
  //   };

  //   window.addEventListener('beforeunload', clearLocalStorageOnUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', clearLocalStorageOnUnload);
  //   };
  // }, [localStorageCleared]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelComePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
