import { useForm, Controller } from 'react-hook-form';
import Grid from '@mui/material/Unstable_Grid2';
import CustomTextField from './PayForm.styled';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const PaymentForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 4 }}
      >
        <Grid xs={4}>
          <Controller
            name="CardHolderName"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Cardholder Name"
                error={!!errors.CardHolderName}
                helperText={
                  errors.CardHolderName && 'Please enter cardholder name'
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
        <Grid xs={4}>
          <Controller
            name="CardNumber"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="Card Number"
                error={!!errors.CardNumber}
                helperText={
                  errors.CardHolderName && 'Please enter a 16-digit card number'
                }
                {...field}
              />
            )}
            rules={{
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
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
              },
            }}
          />
        </Grid>
        <Grid xs={6}>
          <Controller
            name="securityCode"
            control={control}
            render={({ field }) => (
              <CustomTextField
                label="CVV"
                error={!!errors.securityCode}
                helperText={errors.securityCode && 'Please enter your CVV'}
                {...field}
              />
            )}
            rules={{
              pattern: {
                value: /^[0-9]{3}$/,
              },
            }}
          />
        </Grid>
      </Grid>

      <Button
        sx={{
          marginTop: '20px',
          marginBottom: '20px',
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </form>
  );
};

export default PaymentForm;
