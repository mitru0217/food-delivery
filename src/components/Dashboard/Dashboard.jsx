import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../../constants/themeMui';

import Header from '../DashboardComponents/Header';
import Aside from '../DashboardComponents/Aside';

const Dashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          transition: openDrawer
            ? 'transform 1s ease-in-out'
            : 'transform 1s ease-in-out, opacity 2s linear',
          transform: openDrawer ? 'translateX(0)' : 'translateX(-100%)',
          opacity: openDrawer ? '1' : '0',
          width: '300px',
          height: '100%',
          flexShrink: 0,
        }}
      >
        <Aside openDrawer={openDrawer} />
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;

{
  /* <Grid container>
<Grid
  item
  xs={openDrawer ? 10 : 12}
  text-align={openDrawer ? 'right' : 'left'}
>
  <Header toggleDrawer={toggleDrawer} />
</Grid>

<Grid item xs={openDrawer ? 2 : 1}>
  <Box>
    <Aside openDrawer={openDrawer} />
  </Box>
</Grid>
</Grid> */
}
