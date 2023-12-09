// import  { useRef} from 'react';
// import PropTypes from 'prop-types';
import { DesktopAndTablet, Mobile } from '../../MediaQueries';
import { createPortal } from 'react-dom';
import ModalTabletAndDesktop from './ModalTabletAndDesktop';
import ModalMobile from './ModalMobile/ModalMobile';
const modalRoot = document.getElementById('register-root');

const RegisterModal = ({ isOpen, toggleModal }) => {
  return createPortal(
    isOpen && (
      <>
        <DesktopAndTablet>
          <ModalTabletAndDesktop isOpen={isOpen} toggleModal={toggleModal} />
        </DesktopAndTablet>
        <Mobile>
          <ModalMobile isOpen={isOpen} toggleModal={toggleModal} />
        </Mobile>
      </>
    ),
    modalRoot
  );
};

export default RegisterModal;
