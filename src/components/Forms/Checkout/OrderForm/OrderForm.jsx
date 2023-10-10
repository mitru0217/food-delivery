import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid,
} from '@material-ui/core';
import theme from '../../../../constants/themeMui';

const CheckList = ({ addressData, paymentData }) => {
  const { name, phoneNumber, city, street, number } = addressData;
  const { cardNumber, expiryDate, cvv } = paymentData;
  return (
      <ThemeProvider theme={theme}>
          <Stack
     spacing={2}
        sx={{
          border: 1,
          borderColor: 'primary.main',
          borderRadius: '0.8rem',
          padding: '2rem',
         
        }}
    >
       <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Order List
        </Typography>
        <ul>
          <Typography variant="h2">
          Customer:
        </Typography>
          <li>
            <Typography variant='span'>Name:  </Typography>
            <Typography variant='span'>{ name || ''}</Typography></li>
          <li>
            <Typography variant='span'>Phone:  </Typography>
            <Typography variant='span'>{ phoneNumber || ''}</Typography>
        </li>
        </ul>
     
        <ul>
            <Typography variant="h2">
          Delivery address:
        </Typography>  
           <li>
            <Typography variant='span'>City:  </Typography>
            <Typography variant='span'>{city || ''}</Typography>
          </li>
          <li>
            <Typography variant='span'>Street:  </Typography>
            <Typography variant='span'>{street || ''}</Typography>
          </li>
          <li>
            <Typography variant='span'>House Number:  </Typography>
            <Typography variant='span'>{number || ''}</Typography>
       </li>  
        </ul>
          <Typography variant="h2">
          Payment Data:
        </Typography>
        <ul>
              <li>
            <Typography variant='span'>Card Number:  </Typography>
            <Typography variant='span'>{cardNumber || ''}</Typography>
       </li>  
          <li>
            <Typography variant='span'>Expiry Date:  </Typography>
            <Typography variant='span'>{expiryDate || ''}</Typography>
        </li>
          <li>
            <Typography variant='span'>CVV:  </Typography>
            <Typography variant='span'>{cvv || ''}</Typography>
        </li>
      </ul>
    </Stack>
      </ThemeProvider>

  );
};

CheckList.propTypes = {
  addressData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  paymentData: PropTypes.shape({
    cardNumber: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckList;
