import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PrivateRouteAdmin = ({
  component: Component,
  redirectTo = '/admin/auth',
}) => {
  const isAuth = localStorage.getItem('isAuth');
  return isAuth ? <Component /> : <Navigate to={redirectTo} />;
};

PrivateRouteAdmin.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.elementType.isRequired,
};
