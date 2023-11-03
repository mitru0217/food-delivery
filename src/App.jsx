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
