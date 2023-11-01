import { useState, useEffect } from 'react';

import {
  Container,
  Overlay,
  FormContainer,
  Form,
  FormHeading,
  FormText,
  FormField,
  FormButton,
  OverlayHeading,
  OverlayText,
} from './RegisterForm.styled';
import { easeIn } from 'framer-motion';

const RegisterForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(isSignUp);
    }, 500);
  
    return () => clearTimeout(timeout);
  }, [isSignUp]);


  const toggleSignUpSignIn = () => {
    setIsSignUp(!isSignUp);
  };

  const OverlayVariants = {
    signUp: {
      x: '186%',
      backgroundColor: '#ffff',
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    signIn: {
      x: '0',
      backgroundColor: '#2980b9',
      transition: {
        duration: 1, 
        ease: [0.43, 0.13, 0.23, 0.96], 
      },
    },
  };

  const FormVariants = {
    signUp: {
      x: '0',
      backgroundColor: '#2980b9',
      transition: {
        duration: 0.8,
        delay: 0.3, 
        ease: easeIn, 
      },
    },
    signIn: {
      x: '53.9%',
      backgroundColor: '#ffff',
      transition: {
        duration: 0.8,
        delay: 0.3,  
        ease: easeIn, 
      },
    },
  };

const buttonFormVariants = {
  signUp: {
    backgroundColor: '#ffff',
    color: '#2980b9', 
    transition: {
      duration: 0.8, 
      ease: [0.43, 0.13, 0.23, 0.96], 
    },
  },
  signIn: {
    backgroundColor: '#2980b9',
    transition: {
      duration: 0.8, 
      ease: [0.43, 0.13, 0.23, 0.96], 
    },

  },
};

  const buttonOverlayVariants = {
    signUp: {
      backgroundColor: '#2980b9',
      color: '#ffff',
      transition: {
        duration: 0.8, 
        ease: [0.43, 0.13, 0.23, 0.96], 
      },
    },
    signIn: {
      backgroundColor: '#ffff',
      color: '#2980b9', 
      transition: {
        duration: 0.8, 
        ease: [0.43, 0.13, 0.23, 0.96], 
      },
    },
  };

  return (
    <Container>
      <FormContainer
        initial={isSignUp ? 'signUp' : 'signIn'}
        animate={isSignUp ? 'signUp' : 'signIn'}
        variants={FormVariants}
      >
        {showForm ? (
          <Form>
            <FormHeading>Sign In</FormHeading>
            <a href="#">Sign In with Google</a>
            <FormText>or use your account</FormText>
            <FormField type="email" placeholder="email" />
            <FormField type="password" placeholder="password" />
            <FormText>Forgot your password?</FormText>
            <FormButton
              initial={isSignUp ? 'signUp' : 'signIn'}
              animate={isSignUp ? 'signUp' : 'signIn'}
              variants={buttonFormVariants}
              type="submit"
            >
              Sign In
            </FormButton>
          </Form>
        ) : (
          <Form>
            <FormHeading>Create Account</FormHeading>
            <a href="#">Sign In with Google</a>
            <FormText>or use your email for registration</FormText>
            <FormField type="text" placeholder="name" />
            <FormField type="email" placeholder="email" />
            <FormField type="password" placeholder="password" />
            <FormButton 
              initial={isSignUp ? 'signIn' : 'signUp'}
              animate={isSignUp ? 'signIn' : 'signUp'}
              variants={buttonFormVariants}
            type="submit">Sign Up</FormButton>
          </Form>
        )}
      </FormContainer>
      <Overlay
        initial={isSignUp ? 'signUp' : 'signIn'}
        animate={isSignUp ? 'signUp' : 'signIn'}
        variants={OverlayVariants}
      >
        {isSignUp ? (
          <div>
            <OverlayHeading>Hello Friend</OverlayHeading>
            <OverlayText>
              Enter your personal details and start journey with us
            </OverlayText>
          </div>
        ) : (
          <div>
            <OverlayHeading>Welcome Back!</OverlayHeading>
            <OverlayText>
              Keep connected with us please login with your personal info
            </OverlayText>
          </div>
        )}
        <FormButton
          onClick={toggleSignUpSignIn}
          initial={isSignUp ? 'signIn' : 'signUp'}
              animate={isSignUp ? 'signIn' : 'signUp'}
          variants={buttonOverlayVariants}
          type="button"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </FormButton>
      </Overlay>
    </Container>
  );
};

export default RegisterForm;
