import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import {
  Overlay,
  ModalWrapper,
  CloseModalButton,
} from '../RegisterModal.styled';
import RegisterForm from '../../../Forms/Register/RegisterForm/RegisterForm';

const ModalTabletAndDesktop = ({ isOpen, toggleModal }) => {
  const modalRef = useRef();

  const isBigScreen = useMediaQuery({ minWidth: 1700 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const xValue = isBigScreen
    ? '60%'
    : isDesktop
    ? '25%'
    : isTablet
    ? '15%'
    : '20%';
  const yValue = isBigScreen
    ? '50%'
    : isDesktop
    ? '35%'
    : isTablet
    ? '35%'
    : '35%';

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
      y: yValue,
      x: xValue,
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

  return (
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
  );
};

ModalTabletAndDesktop.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default ModalTabletAndDesktop;
