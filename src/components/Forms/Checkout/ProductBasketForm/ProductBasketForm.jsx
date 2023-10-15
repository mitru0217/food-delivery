// import PropTypes from 'prop-types';
// import { useStore } from '../../../../zustand/store';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid  from '@mui/material/Grid';
import theme from '../../../../constants/themeMui';

const ProductBasketForm = () => {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  console.log('cartItems:', cartItems);
  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          border: 1,
          borderColor: 'primary.main',
          borderRadius: '0.8rem',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1">Ordered Products</Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2} justifyContent="center"
          >
            {cartItems.map((item, index) => (
              <Grid item xs={12} sm={8} md={4} key={index}>
                
                <Box sx={{display:'flex', flexWrap: 'wrap', }}>
                
                <Box sx={{ width: '20rem', marginRight:'1rem' }}>
                <img src={item.productInfo.img} alt={item.productInfo.title} width='100' />
                </Box>
                <Box sx={{textAlign:'start'}}>
                <Typography variant="h3">Producer: <Typography variant='span'>{item.suppliers.name}</Typography></Typography>
                  <Typography variant="h3">Name: <Typography variant='span'>{item.productInfo.title}</Typography></Typography>
                  <Typography variant="h3">Price per one: <Typography variant='span'>{item.productInfo.price} $</Typography> </Typography>
                  <Typography variant="h3">Quantity: <Typography variant='span'>{item.quantity}</Typography></Typography>
                </Box>
                </Box>
       
              </Grid>
            ))}
          </Grid>
          <Divider />
        </Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
      </Stack>
    </ThemeProvider>
  );
};

export default ProductBasketForm;
