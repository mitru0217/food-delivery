// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../../zustand/userStore';

export const PrivateRouteUser = ({
  component: Component,
  redirectTo = '/',
}) => {
  //   const setIsAuth = useAuthStore(state => state.setIsKeyAuthenticated);
  const isAuth = useUserStore(state => state.isAuth);

  //   useEffect(() => {
  //     // Проверка статуса аутентификации при монтировании компонента
  //     const status = localStorage.getItem('isAuth');
  //     setIsAuth(status === 'true'); // Установка статуса аутентификации в сторе
  //   }, [setIsAuth]);

  return isAuth ? <Component /> : <Navigate to={redirectTo} />;
};

PrivateRouteUser.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.elementType.isRequired,
};
