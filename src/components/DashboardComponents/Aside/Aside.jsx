import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ProductManagment from '../ProductManagment';
import UsersManagment from '../UsersManagment';
import PromoAndActions from '../PromoAndActions';
import CommonSettings from '../CommonSettings';

const Aside = ({ openDrawer }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={openDrawer}
      sx={{
        width: 300,
        height: '100%',
        flexShrink: 0,
        marginTop: '-8rem',
        '& .MuiDrawer-paper': {
          width: 300,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        display="flex"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
        style={{ background: '#193044' }}
      >
        <CommonSettings />
        <ProductManagment />
        <UsersManagment />
        <PromoAndActions />
      </Box>
    </Drawer>
  );
};

export default Aside;
