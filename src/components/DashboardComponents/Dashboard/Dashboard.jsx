import { ThemeProvider } from '@mui/material/styles';
import { Box, Grid } from '@material-ui/core';
import theme from '../../../constants/themeMui';

import Header from '../Header';
import Aside from '../Aside';
const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
          <Aside />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Dashboard;
