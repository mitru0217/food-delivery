import { useState} from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import {
  Box,
  Grid,
} from '@material-ui/core';
import CustomTextField from '../../../TextField/TextField';
import theme from '../../../../constants/themeMui';
import CustomSelect from '../../../Select/Select';
import cities from '../../../../constants/cities';
import { getStreets, getHouseNumbersForStreet} from '../../../../constants/cityData'
import { useFormDataStore } from '../../../../zustand/store';

const AddressForm = ({onFormSubmitSuccess }) => {
  const { addressData } = useFormDataStore();

  const [storedData, setStoredData] = useState(() => {
    const savedData = localStorage.getItem('addressData');
    if (savedData) {
      return JSON.parse(savedData);
    }
    return addressData;
  });
  const [isChecked, setIsChecked] = useState(false);
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors,isValid},
    watch, // Метод для наблюдения за значениями полей
    clearErrors,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: storedData.name || '',
      phoneNumber: storedData.phoneNumber || '',
      city: storedData.city || '',
      street: storedData.street || '',
      number: storedData.number || '',
      confirmData: true
    }
  });

  const handlePhoneNumberChange = event => {
    const rawValue = event.target.value;
    const withoutPrefix = rawValue.replace('+380 ', '');
    const numericPart = withoutPrefix.replace(/[^0-9]/g, '');
    const formattedValue = '+380 ' + numericPart.substring(0, 9);
    setValue('phoneNumber', formattedValue); 
    event.target.value = formattedValue;
};

  const selectedCity = watch('city');
  const selectedStreet = watch('street');

  const streetsForSelectedCity = selectedCity ? getStreets(selectedCity) : [];
const numbersForSelectedStreet = selectedStreet ? getHouseNumbersForStreet(selectedCity,selectedStreet) : [];

const streetOptions = streetsForSelectedCity.map(street => ({
  label: street,
  value: street
}));

const numberOptions = numbersForSelectedStreet.map(number => ({
  label: number,
  value: number
}));

  const onSubmit = data => {
    localStorage.setItem('addressData', JSON.stringify(data));
    setStoredData(data);
    clearErrors();
    onFormSubmitSuccess() 
  };
const handleCheckboxChange = (e) => {
  setIsChecked(e.target.checked);
  if (e.target.checked) {
    handleSubmit(onSubmit)();
    
  }
}

  return (
   
    <ThemeProvider theme={theme}>
     <Stack  
     spacing={2}
        sx={{
          border: 1,
          borderColor: 'primary.main',
          borderRadius: '0.8rem',
          padding: '2rem',
          textAlign: 'center' 
        }}>
     <Typography variant="h1">
     Shipping address
        </Typography>
       <form onSubmit={handleSubmit(onSubmit)}>
       <Grid container spacing={2} justifyContent="center">
       <Grid item xs={12} sm={8} md={6}>
       <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <CustomTextField
            {...field}
            label="Name"
            error={!!errors.name}
            helperText={errors.name && 'Please enter your name'}
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
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <CustomTextField
            {...field}
            onChange={e => {
        handlePhoneNumberChange(e);
        field.onChange(e);
      }}
            label="Phone Number"
            error={!!errors.phoneNumber}
            helperText={
              errors.phoneNumber && 'Please enter a valid phone number'
            }
          />
        )}
        rules={{
          required: 'This field is required',
          pattern: {
            value: /^\+380 [0-9]{9}$/,
            message: 'Please enter a valid phone number',
          },
        }}
      />
       </Grid>
       <Grid item xs={12} sm={8} md={6}>
  <Controller
    control={control}
    name="city"
    rules={{ required: 'This field is required' }}
    render={({ field, fieldState }) => (
      <CustomSelect
        {...field}
        options={cities}
        label="Cities"
        error={!!fieldState.error}
        helperText={fieldState.error ? fieldState.error.message : null}
      />
    )}
  />
</Grid>
    <Grid item xs={12} sm={8} md={6}>
      {selectedCity && (
        <Controller
        control={control}
        name="street"
        rules={{ required: 'This field is required' }}
        render={({ field, fieldState }) => (
          <CustomSelect 
          {...field} 
        options={streetOptions} 
        label="Streets" 
        error={!!fieldState.error} 
        helperText={errors.street && 'Please select a street'} 
        />
        )}
        />
        )
        }
    </Grid>
    <Grid item xs={12} sm={8} md={6} style={{marginBottom: '20px'}}>
      {selectedStreet && (
        <Controller
        control={control}
        name="number"
        rules={{ required: 'This field is required' }}
        render={({ field, fieldState }) => (
          <CustomSelect 
          {...field} 
        options={numberOptions} 
        label="House Number" 
        error={!!fieldState.error} 
        helperText={errors.street && 'Please select a street'} 
        />
        )}
        />
      )}
    </Grid>
       </Grid>
       <Box
            sx={{ marginBottom: '20px' }}
          >
            <FormControlLabel 
            control={<Checkbox checked={isChecked}/>} 
            label="Use this address for payment details" 
            onChange={(e) => handleCheckboxChange(e)}
            disabled={!isValid} 
            sx={{ '& .MuiSvgIcon-root': { fontSize: 40 },    "& .MuiFormControlLabel-label": {
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

AddressForm.propTypes = {
  data: PropTypes.object,
  updateData: PropTypes.func,
  onFormSubmitSuccess: PropTypes.func.isRequired,
};

export default AddressForm;