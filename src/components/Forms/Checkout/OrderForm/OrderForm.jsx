import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import theme from '../../../../constants/themeMui';
import { useStoreOrder } from '../../../../zustand/store';
import Button from '@mui/material/Button';
import { useStore } from '../../../../zustand/store';

const CheckList = () => {
  
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
  const TotalPrice = useStoreOrder(state => state.totalPrice);
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
        <List>
          <Typography variant="h2">Customer:</Typography>
          <li>
            <Typography variant="span">Name: </Typography>
            <Typography variant="span">{name || ''}</Typography>
          </li>
          <li>
            <Typography variant="span">Phone: </Typography>
            <Typography variant="span">{phoneNumber || ''}</Typography>
          </li>
        </List>

        <ul>
          <Typography variant="h2">Delivery address:</Typography>
          <li>
            <Typography variant="span">City: </Typography>
            <Typography variant="span">{city || ''}</Typography>
          </li>
          <li>
            <Typography variant="span">Street: </Typography>
            <Typography variant="span">{street || ''}</Typography>
          </li>
          <li>
            <Typography variant="span">House Number: </Typography>
            <Typography variant="span">{number || ''}</Typography>
          </li>
        </ul>

        <Typography variant="h2">Payment Data:</Typography>
        <ul>
          <li>
            <Typography variant="span">Card Holder: </Typography>
            <Typography variant="span">{cardHolderName || ''}</Typography>
          </li>
          <li>
            <Typography variant="span">Card Number: </Typography>
            <Typography variant="span">{cardNumber || ''}</Typography>
          </li>
          <li>
            <Typography variant="span">Expiry Date: </Typography>
            <Typography variant="span">{expiryDate || ''}</Typography>
          </li>
          <li>
            <Typography variant="span">CVV: </Typography>
            <Typography variant="span">{cvv || ''}</Typography>
          </li>
        </ul>

        <Typography variant="h2">Cart Items:</Typography>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <Typography variant="span">{item.suppliers.name} - </Typography>
              <Typography variant="span">
                {item.productInfo.title} -{' '}
              </Typography>
              <Typography variant="span">
                {item.quantityBadge} x {item.productInfo.price} ={' '}
              </Typography>
              <Typography variant="span">
                {item.totalPriceForProduct} $
              </Typography>
            </li>
          ))}
        </ul>
        <Typography variant="h2">
          Total Sum:
          <Typography variant="span"> {TotalPrice} $</Typography>
        </Typography>
        <Button onClick={handleSubmit} disabled={isButtonDisabled}>
          Отправить заказ
        </Button>
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

// <FormControlLabel
// control={<Checkbox defaultChecked />}
// label="I want to receive inspiration, marketing promotions and updates via email."
// />
