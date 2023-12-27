import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useUserStore } from '../../zustand/userStore';
import { LogOutButton } from './LogOut.styled';

// const LogOut = () => {
//   const { logoutUser } = useUserStore();
//   const navigate = useNavigate();

//   const handleLogOut = () => {
//     logoutUser();
//     navigate('/');
//   };

//   return <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>;
// };
const LogOut = ({ logoutFunction, redirectPath }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutFunction();
    navigate(redirectPath);
  };

  return <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>;
};

LogOut.propTypes = {
  logoutFunction: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default LogOut;
