// import  { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './constants/theme';
import Loader from './components/Loader/Loader';
const WelComePage = lazy(() => import('./pages/wellComePage'));
const HomePage = lazy(() => import('./pages/homePage'));
const AdminKeyPage = lazy(() => import('./pages/AdminKeyPage'));
const AdminAuth = lazy(() => import('./pages/AdminAuth'));
import PrivateRoute from './components/PrivatRoute/';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelComePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin/key" element={<AdminKeyPage />} />
          <Route
            path="/admin/auth"
            element={
              <PrivateRoute component={AdminAuth} redirectTo="/admin/key" />
            }
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
