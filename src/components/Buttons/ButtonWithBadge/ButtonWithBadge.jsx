import PropTypes from 'prop-types';
import { Badge } from './ButtonWithBadge.styled';
import { ButtonStyled } from '../SecondaryButton/SecondaryButton.styled';

const ButtonWithBadge = ({ children, badgeContent, onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
      {badgeContent > 0 && <Badge>{badgeContent}</Badge>}
    </ButtonStyled>
  );
};

ButtonWithBadge.propTypes = {
  children: PropTypes.node,
  badgeContent: PropTypes.number,
  onClick: PropTypes.func,
};
export default ButtonWithBadge;
