import Box from '@mui/material/Box';

import Logo from '../../../assets/icons/logo.png';
const Header = () => {
  return (
    <Box
      display="flex"
      sx={{
        alignItems: 'center',
        padding: '1rem 5rem',
        borderBottom: '2px solid #ffff',
      }}
      style={{ height: '8rem', background: '#24292e' }}
    >
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
  );
};

export default Header;
