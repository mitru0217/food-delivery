import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../zustand/userStore';
import { LogOutButton } from './LogOut.styled';

const LogOut = () => {
  const { logoutUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser();
    navigate('/');
  };

  return <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>;
};

export default LogOut;
