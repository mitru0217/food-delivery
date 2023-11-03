import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../zustand/store';
import { LogOutButton } from './LogOut.styled';

const LogOut = () => {
  const { logOut } = useAuthStore();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate('/'); 
  };

  return (
    <LogOutButton
      onClick={handleLogOut}>
      Log Out
    </LogOutButton>
  );
};

export default LogOut;
