import { useState, useEffect } from 'react';
import { easeIn } from 'framer-motion';
import {
  Container,
  Overlay,
  FormContainer,
  Wrapper,
  FormHeading,
  FormText,
  OverlayHeading,
  OverlayText,
} from './RegisterForm.styled';

import FormButton from '../../../Buttons/AnimatedButton';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

const RegisterForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOverlay(isSignUp);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isSignUp]);

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
        x: {
          delay: 1,
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
        backgroundColor: {
          delay: 0.3,
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      },
    },
    signIn: {
      x: '0',
      backgroundColor: '#2980b9',
      color: '#ffff',
      transition: {
        x: {
          delay: 0.5,
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
        backgroundColor: {
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
        color: {
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      },
    },
  };

  const FormVariants = {
    signUp: {
      x: '0',
      backgroundColor: '#2980b9',
      color: '#ffff',
      transition: {
        duration: 1,
        delay: 0.3,
        ease: easeIn,
      },
    },
    signIn: {
      x: '53.9%',
      backgroundColor: '#ffff',
      color: '#2980b9',
      transition: {
        duration: 1,
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
      color: '#ffff',
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
          <Wrapper>
            <FormHeading>Sign In</FormHeading>
            <a href="#">Sign In with Google</a>
            <FormText>or use your account</FormText>
            <SignInForm
              isSignUp={isSignUp}
              toggleSignUpSignIn={toggleSignUpSignIn}
              buttonFormVariants={buttonFormVariants}
            />
          </Wrapper>
        ) : (
          <Wrapper>
            <FormHeading>Create Account</FormHeading>
            <a href="#">Sign In with Google</a>
            <FormText>or use your email for registration</FormText>
            <SignUpForm
              isSignUp={isSignUp}
              buttonFormVariants={buttonFormVariants}
            />
          </Wrapper>
        )}
      </FormContainer>
      <Overlay
        initial={isSignUp ? 'signUp' : 'signIn'}
        animate={isSignUp ? 'signUp' : 'signIn'}
        variants={OverlayVariants}
      >
        {showOverlay ? (
          <div>
            <OverlayHeading>Hello, Friend</OverlayHeading>
            <OverlayText>
              Create your account and start journey with us
            </OverlayText>
          </div>
        ) : (
          <div>
            <OverlayHeading>Welcome Back!</OverlayHeading>
            <OverlayText>
              If your have an account keep connected with us. Please login.
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
