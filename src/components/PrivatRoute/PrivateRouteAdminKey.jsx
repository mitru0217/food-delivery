import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAdminStore from '../../zustand/adminStore';

export const PrivateRouteAdminKey = ({
  component: Component,
  redirectTo = '/admin/key',
}) => {
  const isKeyAuthenticated = useAdminStore(state => state.isKeyAuthenticated);

  return isKeyAuthenticated ? <Component /> : <Navigate to={redirectTo} />;
};

PrivateRouteAdminKey.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.elementType.isRequired,
};
