import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PrivateRouteAdminKey = ({
  component: Component,
  redirectTo = '/admin/key',
}) => {
  const isKeyAuthenticated = localStorage.getItem('isKeyAuthenticated');
  return isKeyAuthenticated ? <Component /> : <Navigate to={redirectTo} />;
};

PrivateRouteAdminKey.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.elementType.isRequired,
};
