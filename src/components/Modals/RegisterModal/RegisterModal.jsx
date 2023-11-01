import  { useRef} from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalWrapper,
  CloseModalButton,
} from './RegisterModal.styled';
import RegisterForm from '../../Forms/Register/RegisterForm/RegisterForm';
const modalRoot = document.getElementById('register-root');

const RegisterModal = ({ isOpen, toggleModal }) => {
  const modalRef = useRef();
  const backgroundVariants = {
    initial: {
      opacity: 0,
      scaleY: 0.005,
      scaleX: 0,
    },
    open: {
      opacity: 1,
      scaleY: [0.005, 0.005, 1],
      scaleX: [0, 1, 1],
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.165, 0.84, 0.44, 1.0],
      },
    },
    close: {
      scaleY: [1, 0.005, 0.005],
      scaleX: [1, 1, 0],
      transition: {
        duration: 1,
        delay: 1,
        ease: [0.165, 0.84, 0.44, 1.0],
      },
    },
  };
  const modalVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: '50%',
      x: '65%',
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 1.2,
        ease: [0.165, 0.84, 0.44, 1.0],
      },
    },
    close: {
      scale: 0,
      transition: {
        duration: 0.9,
        delay: 0.3,
        ease: [0.165, 0.84, 0.44, 1.0],
      },
    },
  };

  return createPortal(
    isOpen && (
      <Overlay
        ref={modalRef}
        variants={backgroundVariants}
        animate={isOpen ? 'open' : 'close'}
        initial="initial"
        exit="close"
      >
        <ModalWrapper
          variants={modalVariants}
          animate={isOpen ? 'open' : 'close'}
          initial="initial"
          exit="close"
        >
        <RegisterForm />
          <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
        </ModalWrapper>
      </Overlay>
   
    ), modalRoot

   
  );
};

RegisterModal.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default RegisterModal;
