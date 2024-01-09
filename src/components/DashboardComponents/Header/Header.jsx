import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../../assets/icons/logo.png';
import LogOut from '../../LogOut/LogOut';
import useAdminStore from '../../../zustand/adminStore';

const Header = ({ toggleDrawer }) => {
  const { logout } = useAdminStore();

  return (
    <Box
      display={'flex'}
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 5rem',
        borderBottom: '2px solid #ffff',
      }}
      style={{
        width: '100%',
        height: '8rem',
        marginBottom: '-8rem',
        background: '#24292e',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          color="white"
          aria-label="open drawer"
          edge="start"
          sx={{
            width: '40',
            marginRight: 5,
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon
            sx={{ fontSize: '30px' }}
            style={{ color: '#ffffff', width: '50' }}
          />
        </IconButton>
        <Box
          sx={{
            borderRadius: '50%',
            overflow: 'hidden',
          }}
          style={{ width: '5rem', height: '5rem' }}
        >
          <img src={Logo} alt="logo" style={{ width: '100%' }} />
        </Box>
      </Box>
      <Box>
        <LogOut logoutFunction={logout} redirectPath="/admin/key" />
      </Box>
    </Box>
  );
};

Header.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default Header;
