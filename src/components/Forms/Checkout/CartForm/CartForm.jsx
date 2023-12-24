import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../../../../constants/themeMui';
import { useStore } from '../../../../zustand/userStore';
import Counter from '../../../Counter/Counter';

const CartForm = ({ onFormSubmitSuccess }) => {
  const [cartItems, setCartItems] = useState(
    (JSON.parse(localStorage.getItem('cartItems')) || []).map(item => ({
      ...item,
      quantityBadge: item.quantity,
      totalPriceForProduct: (item.quantity * item.productInfo.price).toFixed(2),
    }))
  );

  const [isChecked, setIsChecked] = useState(false);

  const setBadgeCount = useStore(state => state.setBadgeCount);
  const isTablet = useMediaQuery('(min-width:768px)');
  const isMobile = useMediaQuery(`(max-width: 767px)`);
  const isDesktop = useMediaQuery('(min-width:1000px)');

  const { handleSubmit } = useForm({
    confirmData: true,
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantityBadge * item.productInfo.price,
    0
  );
  const roundedTotal = total.toFixed(2);

  const handleIncrement = (index, event) => {
    event.preventDefault();
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantityBadge++;
    updatedCartItems[index].quantity = updatedCartItems[index].quantityBadge;
    const totalForUpdatedProduct =
      updatedCartItems[index].quantityBadge *
      updatedCartItems[index].productInfo.price;
    updatedCartItems[index].totalPriceForProduct =
      totalForUpdatedProduct.toFixed(2);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleDecrement = (index, event) => {
    event.preventDefault();
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantityBadge >= 2) {
      updatedCartItems[index].quantityBadge--;
      updatedCartItems[index].quantity = updatedCartItems[index].quantityBadge;
      const totalForUpdatedProduct =
        updatedCartItems[index].quantityBadge *
        updatedCartItems[index].productInfo.price;
      updatedCartItems[index].totalPriceForProduct =
        totalForUpdatedProduct.toFixed(2);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const handleRemove = index => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    localStorage.setItem('cartItemsSubmited', JSON.stringify(updatedCartItems));
    // Обновление badgeCount в глобальном состоянии
    const updatedBadgeCount = updatedCartItems.reduce(
      (acc, item) => acc + item.quantityBadge,
      0
    );
    setBadgeCount(updatedBadgeCount);
  };

  const onSubmit = () => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.confirmData = true;
    localStorage.setItem('cartItemsSubmited', JSON.stringify(updatedCartItems));

    onFormSubmitSuccess();
  };

  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      handleSubmit(onSubmit)();
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
          textAlign: 'center',
        }}
      >
        {cartItems.length === 0 ? (
          <Typography variant="h1">Your cart is empty</Typography>
        ) : (
          <Typography variant="h1">Ordered Products</Typography>
        )}

        <Box sx={{ width: '100%' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              style={{
                maxHeight: isMobile ? '200px' : isTablet ? '400px' : 'auto',
                overflowY: isMobile || isTablet ? 'auto' : 'visible',
              }}
            >
              {cartItems.map((item, index) => (
                <Grid item xs={12} sm={8} md={4} key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      border: '1px solid #ccc',
                      padding: '1rem',
                    }}
                  >
                    <IconButton
                      onClick={() => handleRemove(index)}
                      sx={{
                        position: 'absolute',
                        top: '0.5rem',
                        left: '0.5rem',
                        '&:hover': {
                          '& .MuiSvgIcon-root': {
                            // Стиль для иконки при ховере
                            color: 'error.main',
                          },
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Box
                      sx={{
                        width: '10rem',
                        marginRight: '1rem',
                        display: 'flex',
                        alignContent: 'center',
                      }}
                    >
                      <img
                        style={{
                          width: '100%',
                          objectFit: 'contain',
                        }}
                        src={item.productInfo.img}
                        alt={item.productInfo.title}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'start',
                        float: 'right',
                      }}
                    >
                      <Typography variant="h3">
                        {item.suppliers.name}
                      </Typography>
                      <Typography variant="span">
                        {item.productInfo.title}
                      </Typography>
                      <Typography variant="span">
                        {item.productInfo.price} $
                      </Typography>{' '}
                      <Counter
                        count={item.quantityBadge}
                        onIncrement={event => handleIncrement(index, event)}
                        onDecrement={event => handleDecrement(index, event)}
                      />
                      <Typography variant="h5" sx={{ marginTop: '1rem' }}>
                        Total:{' '}
                        <Typography variant="span">
                          {(
                            item.quantityBadge * item.productInfo.price
                          ).toFixed(2)}{' '}
                          $
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ marginBottom: '2rem' }} />
            {cartItems.length > 0 && (
              <>
                <Typography variant="h4" sx={{ fontWeight: '500' }}>
                  Total sum:
                  <Typography variant="spanSecond" sx={{ fontWeight: '900' }}>
                    {' '}
                    {roundedTotal} $
                  </Typography>
                </Typography>
                <Box sx={{ marginBottom: '2rem', marginTop: '2rem' }}>
                  <FormControlLabel
                    control={<Checkbox checked={isChecked} />}
                    label="Confirm your details and proceed to payment"
                    onChange={e => handleCheckboxChange(e)}
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 40 },
                      '& .MuiFormControlLabel-label': {
                        color: 'primary.main',
                        fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      },
                    }}
                  />
                </Box>
              </>
            )}
          </form>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

CartForm.propTypes = {
  onFormSubmitSuccess: PropTypes.func.isRequired,
};

export default CartForm;
