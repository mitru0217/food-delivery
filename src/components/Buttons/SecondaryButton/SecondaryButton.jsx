import { ButtonStyled } from './SecondaryButton.styled';
import PropTypes from 'prop-types';

const SecondaryButton = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

SecondaryButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default SecondaryButton;
