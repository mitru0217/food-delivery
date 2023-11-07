import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import CustomTextField from '../../../TextField/TextField';
import theme from '../../../../constants/themeMui';
import { useAuthStore } from '../../../../zustand/store';
import FormButton from '../../../Buttons/AnimatedButton';
import { Box } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import baseTheme from '../../../../constants/themeMui';

const SignInForm = ({ isSignUp, buttonFormVariants }) => {
  const { user } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const isMobile = useMediaQuery({ maxWidth: 767 })
  const defaultColor = baseTheme.palette.primary.main;
  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: user.email || '',
      password: user.password || '',
    },
  });

  const onSubmit = data => {
    navigate('/home');
    console.log(data);
    reset();
    clearErrors();
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  label="Email"
                  labelStyle={{ color: isMobile ? defaultColor : '#ffff' }}
                  error={!!errors.email}
                  helperText={errors.email && 'Please enter a valid email'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MdEmail />
                      </InputAdornment>
                    ),
                    style: {
                      fontSize: '2rem',
                      color: '#ffff',
                    },
                  }}
                />
              )}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email ',
                },
              }}
            />
          </Box>
          <Box>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  labelStyle={{ color: isMobile ? defaultColor : '#ffff' }}
                  error={!!errors.password}
                  minLength={8}
                  helperText={
                    errors.password &&
                    'Password must have at least 8 characters'
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: {
                      fontSize: '2rem',
                      color: '#ffff',
                    },
                  }}
                />
              )}
              rules={{
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              }}
            />
          </Box>
          {isValid && (
            <FormButton
              type="submit"
              disabled={!isValid}
              onClick={handleSubmit}
              initial={isSignUp ? 'signIn' : 'signUp'}
              animate={isSignUp ? 'signIn' : 'signUp'}
              variants={buttonFormVariants}
            >
              Sign In
            </FormButton>
          )}
        </form>
      </Stack>
    </ThemeProvider>
  );
};

SignInForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  isSignUp: PropTypes.bool,
  buttonFormVariants: PropTypes.object,
};

export default SignInForm;
