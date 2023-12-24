import Box from '@mui/material/Box';
import ProductManagment from '../ProductManagment';
import UsersManagment from '../UsersManagment';
import PromoAndActions from '../PromoAndActions';
import CommonSettings from '../CommonSettings';
const Aside = () => {
  return (
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
  );
};

export default Aside;
