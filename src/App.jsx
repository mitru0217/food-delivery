// import  { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './constants/theme';
import Loader from './components/Loader/Loader';
const WelComePage = lazy(() => import('./pages/wellComePage'));
const HomePage = lazy(() => import('./pages/homePage'));
const AdminKeyPage = lazy(() => import('./pages/adminKeyPage'));
const AdminAuth = lazy(() => import('./pages/adminAuthPage'));
const AdminPage = lazy(() => import('./pages/adminPage'));
import {
  PrivateRouteAdminKey,
  PrivateRouteAdmin,
  PrivateRouteUser,
} from './components/PrivatRoute/';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelComePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/home"
            element={<PrivateRouteUser component={HomePage} redirectTo="/" />}
          />
          <Route path="/admin/key" element={<AdminKeyPage />} />
          <Route
            path="/admin/auth"
            element={
              <PrivateRouteAdminKey
                component={AdminAuth}
                redirectTo="/admin/key"
              />
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <PrivateRouteAdmin
                component={AdminPage}
                redirectTo="/admin/auth"
              />
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  );
};

export default App;
