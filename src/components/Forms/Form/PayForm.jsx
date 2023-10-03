import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CreditCard from '../../CreditCard/CreditCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CustomTextField from './PayForm.styled';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { alignItems } from 'styled-system';

const PaymentForm = () => {
  const [isFront, setIsFront] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch, // Метод для наблюдения за значениями полей
    reset,
    clearErrors,
  } = useForm({
    mode: 'onBlur',
  });
  const toggleCardSide = code => {
    if (code.trim() !== '') {
      setIsFront(false); // Переворачиваем карту на "заднюю" сторону
    } else {
      setIsFront(true); // Возвращаем карту на "лицевую" сторону
    }
  };
  const handleSecurityCode = e => {
    const { value } = e.target;
    // const formattedVal = value.replace(/\D/g, '').slice(0, 3);
    // setSecurityCode(formattedVal);
    toggleCardSide(value);
  };
  const onSubmit = async data => {
    console.log(data);
    reset();
    await clearErrors();
  };
  // Используем watch для получения текущих значений полей
  const cardHolderName = watch('cardHolderName', ''); // По умолчанию пустая строка
  const cardNumber = watch('cardNumber', '');
  const expirityDate = watch('expirityDate', '');
  const securityCode = watch('cvv', '');

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'primary.main',
        borderRadius: '0.8rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CreditCard
        name={cardHolderName}
        cardNumber={cardNumber}
        expirityDate={expirityDate}
        securityCode={securityCode}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 6 }}
        >
          <Grid xs={6}>
            <Controller
              name="cardHolderName"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  label="Cardholder Name"
                  error={!!errors.cardHolderName}
                  helperText={
                    errors.cardHolderName && 'Please enter cardholder name'
                  }
                  {...field}
                />
              )}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /[A-Za-z]/,
                },
              }}
            />
          </Grid>
          <Grid xs={6}>
            <Controller
              name="cardNumber"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  label="Card Number"
                  error={!!errors.cardNumber}
                  helperText={
                    errors.cardNumber && 'Please enter a 16-digit card number'
                  }
                  {...field}
                />
              )}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^[0-9]{16}$/, // Регулярное выражение для 16 цифр
                },
              }}
            />
          </Grid>
          <Grid xs={6}>
            <Controller
              name="expirityDate"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  label="Expirity Date"
                  error={!!errors.expirityDate}
                  helperText={
                    errors.expirityDate &&
                    'Please enter a valid expiry date (MM/YY)'
                  }
                  {...field}
                />
              )}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                },
              }}
            />
          </Grid>
          <Grid xs={6}>
            <Controller
              name="cvv"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  label="CVV"
                  error={!!errors.cvv}
                  helperText={errors.cvv && 'Please enter your CVV'}
                  {...field}
                  // onChange={handleSecurityCode}
                  onChange={e => {
                    field.onChange(e);
                    handleSecurityCode(e); // Вызываем функцию для обновления состояния
                  }}
                />
              )}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^[0-9]{3}$/,
                },
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{ textAlign: 'right', marginTop: '20px', marginBottom: '20px' }}
        >
          <Button variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PaymentForm;
