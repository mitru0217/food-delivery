import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../zustand/store';
import { LogOutButton } from './LogOut.styled';

const LogOut = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate('/');
  };

  return <LogOutButton onClick={handleLogOut}>Log Out</LogOutButton>;
};

export default LogOut;
