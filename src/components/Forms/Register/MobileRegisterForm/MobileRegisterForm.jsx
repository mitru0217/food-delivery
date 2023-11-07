import { useState, useEffect } from 'react';
import { easeIn } from 'framer-motion';
import {
  Container,
  FormContainer,
  Wrapper,
  FormHeading,
  FormText,
  Overlay,
  OverlayText,
  FormButton,
} from './MobileRegisterForm.styled';

import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

const MobileRegisterForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(isSignUp);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isSignUp]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOverlay(isSignUp);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isSignUp]);

  const toggleSignUpSignIn = () => {
    setIsSignUp(!isSignUp);
  };

  const OverlayVariants = {
    signUp: {
      backgroundColor: '#29b96c',
      transition: {
        delay: 0.3,
        duration: 1,
        ease: easeIn,
      },
    },
    signIn: {
      backgroundColor: '#2980b9',
      transition: {
        duration: 1,
        ease: easeIn,
      },
    },
  };

  const FormVariants = {
    signUp: {
      y: ['100%', '0%'],
      opacity: [0, 1],
      transition: {
        y: { duration: 1, ease: easeIn },
        opacity: { duration: 0.1 },
      },
    },
    signIn: {
      y: ['-100%', '0%'],
      opacity: [0, 1],
      transition: {
        y: { duration: 1, ease: easeIn },
        opacity: { duration: 0.1 },
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
            <OverlayText>
              Enter your personal details and start journey with us
            </OverlayText>
          </div>
        ) : (
          <div>
            <OverlayText>
              Keep connected with us please login with your personal info
            </OverlayText>
          </div>
        )}
        <FormButton onClick={toggleSignUpSignIn} type="button">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </FormButton>
      </Overlay>
    </Container>
  );
};

export default MobileRegisterForm;
