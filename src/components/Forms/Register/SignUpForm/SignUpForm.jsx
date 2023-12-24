import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CustomTextField from '../../../TextField/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import theme from '../../../../constants/themeMui';
import { useUserStore } from '../../../../zustand/userStore';
import FormButton from '../../../Buttons/AnimatedButton';
import {
  MdEmail,
  MdAccountCircle,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';

const SignUpForm = ({ isSignUp, buttonFormVariants, toggleSignUpSignIn }) => {
  const { user, registerUser } = useUserStore(); // Получение данных из хранилища
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const { name, email, password } = user || {};
  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: name || '',
      email: email || '',
      password: password || '',
    },
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    try {
      const { name, email, password } = data;
      await registerUser(name, email, password);
      const { isAuth, user } = useUserStore.getState();
      //Проверяем, есть ли пользователь в системе или установлен ли токен доступа

      if (isAuth && user) {
        toggleSignUpSignIn(); // Вызываем функцию переключения формы

        return;
      }

      navigate('/home');
      reset();
      clearErrors();
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  label="Name"
                  error={!!errors.name}
                  helperText={errors.name && 'Please enter your name'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MdAccountCircle />
                      </InputAdornment>
                    ),
                    style: {
                      fontSize: '2rem',
                      color: isMobile ? '#ffff' : '#000000',
                    },
                  }}
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
          </Box>
          <Box>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  label="Email"
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
                      color: isMobile ? '#ffff' : '#000000',
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
                          onMouseDown={handleMouseDownPassword}
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
                      color: isMobile ? '#ffff' : '#000000',
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
              Sign Up
            </FormButton>
          )}
        </form>
      </Box>
    </ThemeProvider>
  );
};

SignUpForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  isSignUp: PropTypes.bool,
  buttonFormVariants: PropTypes.object,
  toggleSignUpSignIn: PropTypes.func,
};

export default SignUpForm;

// const { isAuth } = useUserStore.getState(); // Получаем текущее значение isAuth из состояния
// const isRegistered = await registerUser(name, email, password);
// if (!isRegistered) {
//   // Если не удалось зарегистрировать пользователя, переключаем форму
//   toggleSignUpSignIn();
//   return;
// }
