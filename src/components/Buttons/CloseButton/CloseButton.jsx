import PropTypes from 'prop-types';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ButtonStyled, CloseIcon } from './CloseButton.styled';

const CloseButton = ({ onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      <CloseIcon
        // style={{ width: '4rem', height: '4rem', color: 'white' }}
      />
    </ButtonStyled>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
};
export default CloseButton;
