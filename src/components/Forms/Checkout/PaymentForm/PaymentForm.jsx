import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomTextField from '../../../TextField/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import theme from '../../../../constants/themeMui';
import CreditCard from '../../../CreditCard/CreditCard';
import CardNumberMask from '../../../Utils/cardNumberMask';

const PaymentForm = ({ data, updateData }) => {
  const isDesktop = useMediaQuery('(min-width:767px)');
  const [isChecked, setIsChecked] = useState(data.confirmData || false);
  const [isFront, setIsFront] = useState(true);
  const [cardType, setCardType] = useState(null);
  const [securityCode, setSecurityCode] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors,isValid},
    watch, // Метод для наблюдения за значениями полей
    clearErrors,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      cardHolderName: data.cardHolderName || '',
      cardNumber: data.cardNumber || '',
      expiryDate: data.expiryDate || '',
      cvv: data.cvv || '',
    }
 
  });

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  const toggleCardSide = code => {
    if (code.trim() !== '') {
      setIsFront(false); // Переворачиваем карту на "заднюю" сторону
    } else {
      setIsFront(true); // Возвращаем карту на "лицевую" сторону
    }
  };
  const handleSecurityCode = e => {
    const { value } = e.target;
    toggleCardSide(value);
  };
  const onSubmit = data => {
    updateData(data);
    clearErrors();
  };

 const handleCheckboxChange = (e) => {
   setIsChecked(e.target.checked);
   console.log(e.target.checked);
  if (e.target.checked) {
    handleSubmit(onSubmit)();
  }
}
  // Используем watch для получения текущих значений полей
  const cardHolderName = watch('cardHolderName', ''); // По умолчанию пустая строка
  const cardNumber = watch('cardNumber', '');
  const expiryDate = watch('expiryDate', '');

  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          border: 1,
          borderColor: 'primary.main',
          borderRadius: '0.8rem',
          padding: '4rem',
        }}
      >
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Payment Information
        </Typography>
        {isDesktop && (
          <CreditCard
            cardHolderName={cardHolderName}
            cardNumber={cardNumber}
            expiryDate={expiryDate}
            securityCode={securityCode}
            cardType={cardType}
            isFront={isFront}
            toggleCard={toggleCard}
          />
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Controller
                name="cardHolderName"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field} // сначала передаем все свойства из field
                    onChange={e => {
                      field.onChange(e);
                    }}
                    label="Cardholder Name"
                    error={!!errors.cardHolderName}
                    helperText={
                      errors.cardHolderName && 'Please enter cardholder name'
                    }
                  />
                )}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Za-z\s]*$/,
                    message: 'Only letters and spaces are allowed',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Controller
                name="cardNumber"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    onChange={e => {
                      const inputVal = e.target.value;

                      // Checking card type before limiting the input
                      let matchedCardType = null;
                      for (const card of CardNumberMask) {
                        const regex = new RegExp(card.regex);
                        if (regex.test(inputVal)) {
                          matchedCardType = card.cardtype;
                          break;
                        }
                      }
                      setCardType(matchedCardType);

                      // Limiting the input to 16 digits
                      const formatedValue = inputVal
                        .replace(/[^0-9]/g, '')
                        .slice(0, 16);

                      field.onChange({
                        ...e,
                        target: {
                          ...e.target,
                          value: formatedValue,
                        },
                      });
                    }}
                    label="Card Number"
                    error={!!errors.cardNumber}
                    helperText={
                      errors.cardNumber && 'Please enter a 16-digit card number'
                    }
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
            <Grid item xs={12} sm={8} md={6}>
              <Controller
                name="expiryDate"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    onChange={e => {
                      const inputVal = e.target.value;
                      const formatedValue = inputVal
                        .replace(/[^0-9]/g, '')
                        .slice(0, 4);

                      field.onChange({
                        ...e,
                        target: {
                          ...e.target,
                          value: formatedValue,
                        },
                      });
                    }}
                    label="Expiry Date"
                    error={!!errors.expiryDate}
                    helperText={
                      errors.expiryDate &&
                      'Please enter a valid expiry date (MMYY)'
                    }
                  />
                )}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /(\d{2})(\d{2})/,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Controller
                name="cvv"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    onChange={e => {
                      const inputVal = e.target.value;
                      const formatedValue = inputVal
                        .replace(/\D/g, '')
                        .slice(0, 3);
                      setSecurityCode(formatedValue);
                      handleSecurityCode(e);
                      field.onChange({
                        ...e,
                        target: {
                          ...e.target,
                          value: formatedValue,
                        },
                      });
                    }}
                    label="CVV"
                    error={!!errors.cvv}
                    helperText={errors.cvv && 'Please enter your CVV'}
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
            sx={{ marginBottom: '20px', textAlign: 'center', marginTop: '20px' }}
          >
            <FormControlLabel 
            control={<Checkbox checked={isChecked}/>} 
            label="Confirm your details and proceed to order" 
            onChange={(e) => handleCheckboxChange(e)}
            disabled={!isValid} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 },
            "& .MuiFormControlLabel-label": {
             color: "primary.main", 
             fontSize: "1.5rem", 
    } }}
            />
          </Box>
        </form>
      </Stack>
    </ThemeProvider>
  );
};

PaymentForm.propTypes = {
  data: PropTypes.object,
  updateData: PropTypes.func,
};

export default PaymentForm;