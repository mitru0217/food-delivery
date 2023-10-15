import PropTypes from 'prop-types';

import { ButtonStyled } from './SizeButton.styled';
import { SiZeromq } from 'react-icons/si';
const SizeButton = ({ sizeInfo, isSelected, onClick }) => {
  const buttonStyle = {
    backgroundColor: isSelected ? '#007bff' : '#FFFFFF',
    color: isSelected ? '#FFFFFF' : '#7E7E7E',
  };

  return (
    <ButtonStyled onClick={onClick} style={buttonStyle}>
      <SiZeromq />
      {sizeInfo.size} sm
    </ButtonStyled>
  );
};

SizeButton.propTypes = {
  sizeInfo: PropTypes.shape({
    size: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SizeButton;
