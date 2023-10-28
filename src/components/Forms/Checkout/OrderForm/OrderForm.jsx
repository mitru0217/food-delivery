import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../../../constants/themeMui';
import { useStoreOrder } from '../../../../zustand/store';
import Button from '@mui/material/Button';
import { useStore } from '../../../../zustand/store';

const CheckList = () => {
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:999px)');
  const isMobile = useMediaQuery(`(max-width: 767px)`);
  // const isDesktop = useMediaQuery('(min-width:1000px)');

  const setBadgeCount = useStore(state => state.setBadgeCount);

  const [paymentData, setPaymentData] = useState(
    JSON.parse(localStorage.getItem('paymentData')) || {}
  );
  const { cardHolderName, cardNumber, expiryDate, cvv } = paymentData;

  const [addressData, setAddressData] = useState(
    JSON.parse(localStorage.getItem('addressData')) || {}
  );
  const { name, phoneNumber, city, street, number } = addressData;

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );
  // const TotalPrice = useStoreOrder(state => state.totalPrice);
  const setTotalPrice = useStoreOrder(state => state.setTotalPrice);

  // Проверка на заполненность всех полей
  const areAllDataFilled = useCallback(() => {
    const allPaymentFields = Object.values(paymentData).every(value => value);
    const allAddressFields = Object.values(addressData).every(value => value);
    return allPaymentFields && allAddressFields && cartItems.length > 0;
  }, [paymentData, addressData, cartItems]);

  // Обновление состояния кнопки "Отправить заказ"
  const [isButtonDisabled, setIsButtonDisabled] = useState(!areAllDataFilled());
  useEffect(() => {
    setIsButtonDisabled(!areAllDataFilled());
  }, [areAllDataFilled]);

  // Обработчик клика по кнопке "Отправить заказ"
  const handleSubmit = async () => {
    // Создаём объект данных, который вы хотите отправить на бэкенд
    const data = {
      addressData,
      paymentData,
      cartItems,
    };
    try {
      console.log(data);
      setCartItems([]);
      setAddressData({});
      setPaymentData({});
      setTotalPrice(0);
      setBadgeCount(0);
      localStorage.clear();
    } catch (error) {
      console.error('Ошибка при отправке данных на бэкенд:', error);
    }
  };
  const total = cartItems.reduce(
    (sum, item) => sum + item.quantityBadge * item.productInfo.price,
    0
  );
  const roundedTotal = total.toFixed(2);
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
        style={{
                // maxHeight: isMobile ? '350px' : isTablet ? '400px' : 'auto',
                maxHeight: isMobile || isTablet ? '350px' : 'auto',
                overflowY: isMobile || isTablet ? 'auto' : 'visible',
              }}
      >
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Order summary
        </Typography>
        <List sx={{ width: '100%' }}>
          {cartItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="h4">
                  {item.suppliers.name} / {item.productInfo.title}
                </Typography>
              </Box>
              <Box>
                <Typography variant="spanSecond" component="span">
                  {item.quantityBadge} x {item.productInfo.price} $ ={' '}
                  {item.totalPriceForProduct} $
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider />
        {cartItems.length >0 && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h2">Total Sum:</Typography>
          </Box>
          <Box>
            <Typography variant="spanSecond" sx={{fontWeight: '900'}}> {roundedTotal} $</Typography>
          </Box>
        </Box>
        )}
      
        <Divider />
        <Box sx={{ width: '100%' }}>
        <Grid 
        container 
        spacing={2}
        justifyContent={isMobile ? "start" : "space-around"}
        >
          <Grid item xs={12} sm={4} md={4}>
          <List
            sx={{
             
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              
            }}
          >
            <Box>
              <Typography variant="h2">Customer:</Typography>
            </Box>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">{name || ''}</Typography>
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">
                tel: {phoneNumber || ''}
              </Typography>
            </ListItem>
          </List>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
          <List
            sx={{
        
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
             
            }}
          >
            <Box>
              <Typography variant="h2">Shipping address:</Typography>
            </Box>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">City: {city || ''}</Typography>
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">Str: {street || ''}</Typography>
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">
                House: {number || ''}
              </Typography>
            </ListItem>
          </List>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
          <List
            sx={{
         
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              
            }}
          >
            <Box>
              <Typography variant="h2">Payment Method:</Typography>
            </Box>

            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">
                Card Number: {cardNumber || ''}
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">
                Card Holder: {cardHolderName || ''}
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">
                Expiry Date: {expiryDate.slice(0, 4).replace(/(\d{2})(\d{2})/, '$1/$2') || ''}
              </Typography>
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <Typography variant="spanSecond">
                CVV: {cvv || ''}
              </Typography>
            </ListItem>
          </List>
          </Grid>
        </Grid>
       
        

      
        </Box>
        <Divider />
        <Button onClick={handleSubmit} disabled={isButtonDisabled}>
          Отправить заказ
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

CheckList.propTypes = {
  addressData: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  paymentData: PropTypes.shape({
    cardNumber: PropTypes.string,
    expiryDate: PropTypes.string,
    cvv: PropTypes.string,
  }).isRequired,
};

export default CheckList;

// <FormControlLabel
// control={<Checkbox defaultChecked />}
// label="I want to receive inspiration, marketing promotions and updates via email."
// />
