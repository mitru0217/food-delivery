import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay } from './ModalForProduct.styled';
import Container from '../../Container/Container';

import CloseButton from '../../Buttons/CloseButton/CloseButton';
const modalRoot = document.getElementById('toast-root');

const ModalForProduct = ({ isOpen, onClose, children }) => {

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };
  return isOpen
    ? createPortal(
      <Overlay onClick={onClose}>
        <Container onClick={handleContainerClick}>
          {children}
        </Container>
          <CloseButton onClick={onClose} />
        </Overlay>,
        modalRoot
      )
    : null;
};

ModalForProduct.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default ModalForProduct;