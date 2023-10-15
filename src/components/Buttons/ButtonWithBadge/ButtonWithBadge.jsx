import PropTypes from 'prop-types';
import { Badge } from './ButtonWithBadge.styled';
import { ButtonStyled } from '../SecondaryButton/SecondaryButton.styled';
// import { useBadgeCountStore } from '../../../zustand/store';

import { useStore} from '../../../zustand/store';
const ButtonWithBadge = ({ children, badgeContent, onClick }) => {


  const badgeCount = useStore(state => state.badgeCount);
  return (
    <ButtonStyled onClick={onClick}>
      {children}
      {badgeContent > 0 && <Badge>{badgeCount}</Badge>}
    </ButtonStyled>
  );
};

ButtonWithBadge.propTypes = {
  children: PropTypes.node,
  badgeContent: PropTypes.number,
  onClick: PropTypes.func,
};
export default ButtonWithBadge;
