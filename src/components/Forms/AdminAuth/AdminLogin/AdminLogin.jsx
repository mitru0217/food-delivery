import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Box } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';

import CustomTextField from '../../../TextField/TextField';
import theme from '../../../../constants/themeMui';
import baseTheme from '../../../../constants/themeMui';
import useAdminStore from '../../../../zustand/adminStore';
import FormButton from '../../../Buttons/AnimatedButton';

const AdminLogin = () => {
  const { user, login, isAuth } = useAdminStore(); // Получение данных из хранилища
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(show => !show);

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
      // email: email || '',
      // password: password || '',
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    // Проверяем обновленные данные пользователя
    if (isAuth) {
      reset();
      clearErrors();
    }
  }, [reset, clearErrors, isAuth]);

  const onSubmit = async data => {
    try {
      const { email, password } = data;
      await login(email, password); // Вызов метода login из хранилища
      // Проверяем, есть ли данные пользователя после входа
      if (!user) {
        alert('Create Account');
        return;
      }
      navigate('/admin/dashboard');
      reset();
      clearErrors();
    } catch (error) {
      console.error('Error during login:', error);
    }
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
                  labelStyle={{ color: defaultColor }}
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
                      color: '#000000',
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
                  labelStyle={{ color: defaultColor }}
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
                      color: '#000000',
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

          <FormButton
            style={{
              color: '#ffffff',
              background: '#00a2e5',
            }}
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            Log In
          </FormButton>
        </form>
      </Stack>
    </ThemeProvider>
  );
};

AdminLogin.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  isSignUp: PropTypes.bool,
  buttonFormVariants: PropTypes.object,
  toggleSignUpSignIn: PropTypes.func,
};

export default AdminLogin;

// useEffect(() => {
//   const checkAuthentication = async () => {
//     try {
//       // Проверяем обновленные данные пользователя
//       if (isAuth) {
//         navigate('/admin/dashboard');
//         reset();
//         clearErrors();
//       }
//     } catch (error) {
//       console.error('Error checking authentication:', error);
//       // Обработка ошибок при проверке авторизации
//     }
//   };

//   checkAuthentication();
// }, [navigate, reset, clearErrors, isAuth]);
