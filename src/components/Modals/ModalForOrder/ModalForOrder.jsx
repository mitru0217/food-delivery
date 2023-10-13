import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';
import { Overlay } from './ModalForOrder.styled';
import ShoppingCart from '../../../components/ShoppingCart';
import CloseButton from '../../Buttons/CloseButton/CloseButton';
const modalRoot = document.getElementById('modal-root');

const ModalForOrder = ({ isOpen, onClose }) => {
  return isOpen
    ? createPortal(
        <Overlay>
          <ShoppingCart isOpen={isOpen} />
          <CloseButton onClick={onClose} />
        </Overlay>,
        modalRoot
      )
    : null;
};

ModalForOrder.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalForOrder;
