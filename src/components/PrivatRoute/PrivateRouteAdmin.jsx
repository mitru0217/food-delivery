import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAdminStore from '../../zustand/adminStore';

export const PrivateRouteAdmin = ({
  component: Component,
  redirectTo = '/admin/auth',
}) => {
  const isAuth = useAdminStore(state => state.isAuth);

  return isAuth ? <Component /> : <Navigate to={redirectTo} />;
};

PrivateRouteAdmin.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.elementType.isRequired,
};
