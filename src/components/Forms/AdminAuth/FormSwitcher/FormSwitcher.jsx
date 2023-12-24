import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { Stack, Button, Typography } from '@mui/material';

import theme from '../../../../constants/themeMui';
import AdminSignUp from '../AdminSignUp/AdminSignUp';
import AdminLogin from '../AdminLogin/AdminLogin';
// import useAdminStore from '../../../../zustand/adminStore';

const FormSwitcher = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = () => {
    setIsLoginForm(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',

            borderRadius: '20px',
            padding: '2.5rem',
          }}
        >
          {isLoginForm ? (
            <motion.div
              key="loginForm"
              initial={{ opacity: 1, rotateY: '-180deg' }}
              animate={{ opacity: 1, rotateY: '0' }}
              exit={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              style={{
                borderRadius: '1rem',
                height: '35rem',
                padding: '2rem',
                backgroundColor: theme.palette.secondary.cyan,
              }}
            >
              <AdminLogin />
              <Typography
                style={{
                  marginTop: '2rem',
                  marginBottom: '0.25rem',
                  fontSize: '1.5rem',
                  color: theme.palette.primary.main,
                  textDecoration: 'underline',
                }}
              >
                Not account?
              </Typography>
              <Button
                style={{
                  fontSize: '1.25rem',
                  color: theme.palette.secondary.indigo,
                }}
                onClick={switchForm}
              >
                SignUp
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="registerForm"
              initial={{ opacity: 0, rotateY: '180deg' }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -10 }}
              transition={{ duration: 1 }}
              style={{
                borderRadius: '1rem',
                height: '35rem',
                padding: '2rem',
                backgroundColor: theme.palette.secondary.lightBlue,
              }}
            >
              <AdminSignUp />
              <Typography
                style={{
                  marginTop: '2rem',
                  marginBottom: '0.25rem',
                  fontSize: '1.5rem',
                  color: theme.palette.primary.main,
                  textDecoration: 'underline',
                }}
              >
                Already have an account?
              </Typography>
              <Button
                style={{
                  fontSize: '1.25rem',
                  color: theme.palette.secondary.indigo,
                }}
                onClick={switchForm}
              >
                Login
              </Button>
            </motion.div>
          )}
        </Stack>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default FormSwitcher;
