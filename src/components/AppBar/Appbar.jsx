import PropTypes from 'prop-types';
// import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../assets/icons/logo.png';
import LogOut from '../LogOut';
import useAdminStore from '../../zustand/adminStore';

// import { StyledAppBar } from './AppBar.styled';

import MuiAppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';

import theme from '../../constants/themeMui';

const useStyles = makeStyles(() => ({
  appBar: {
    // Получаем стили из темы для MuiAppBar
    ...theme.components.MuiAppBar.styleOverrides.root,
  },
  appBarShift: {
    ...theme.components.MuiAppBar.styleOverrides.appBarShift,
  },
}));

export const AppBar = ({ handleDrawerOpen, open }) => {
  const classes = useStyles();
  const { logout } = useAdminStore();
  return (
    <MuiAppBar
      position="fixed"
      className={`${classes.appBar} ${open ? classes.appBarShift : ''}`}
    >
      <Toolbar
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 5rem',
          borderBottom: '2px solid #ffff',
        }}
        style={{ height: '8rem', background: '#24292e' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              width: '50px',
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon
              sx={{ width: '50px' }}
              style={{ color: '#ffffff', width: '50px' }}
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
      </Toolbar>
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AppBar;

// const AppBar = ({ handleDrawerOpen, open }) => {
//   const theme = useTheme();
//   const { logout } = useAdminStore();

//   return (
//     <StyledAppBar position="fixed" open={open} theme={theme}>
//       <Toolbar
//         sx={{
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: '1rem 5rem',
//           borderBottom: '2px solid #ffff',
//         }}
//         style={{ height: '8rem', background: '#24292e' }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton
//             color="white"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               width: '50px',
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon
//               sx={{ width: '50px' }}
//               style={{ color: '#ffffff', width: '50px' }}
//             />
//           </IconButton>
//           <Box
//             sx={{
//               borderRadius: '50%',
//               overflow: 'hidden',
//             }}
//             style={{ width: '5rem', height: '5rem' }}
//           >
//             <img src={Logo} alt="logo" style={{ width: '100%' }} />
//           </Box>
//         </Box>
//         <Box>
//           <LogOut logoutFunction={logout} redirectPath="/admin/key" />
//         </Box>
//       </Toolbar>
//     </StyledAppBar>
//   );
// };
// AppBar.propTypes = {
//   handleDrawerOpen: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };

// export default AppBar;
