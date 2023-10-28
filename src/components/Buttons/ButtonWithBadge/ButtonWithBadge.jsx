
import PropTypes from 'prop-types';
import { Badge } from './ButtonWithBadge.styled';
import { ButtonStyled } from '../SecondaryButton/SecondaryButton.styled';


const ButtonWithBadge = ({ children, onClick, badgeCount}) => {

  return (
    <ButtonStyled onClick={onClick}>
      {children}
      {badgeCount > 0 && <Badge>{badgeCount}</Badge>}
    </ButtonStyled>
  );
};

ButtonWithBadge.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  badgeCount: PropTypes.number,
};
export default ButtonWithBadge;
