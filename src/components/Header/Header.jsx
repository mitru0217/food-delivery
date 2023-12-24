import PropTypes from 'prop-types';
import { HeaderStyled, BtnWrapper, HeaderContainer } from './Header.styled';
import Button from '../Buttons/SecondaryButton';
import ButtonWithBadge from '../Buttons/ButtonWithBadge/ButtonWithBadge';
import { useStore } from '../../zustand/userStore';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import UserProfile from '../UserProfile/UserProfile';
const Header = ({ onClick }) => {
  const badgeCount = useStore(state => state.badgeCount);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <BtnWrapper>
          <Button>Shop</Button>
          <ButtonWithBadge
            text="Button"
            onClick={onClick}
            badgeCount={badgeCount}
          >
            <AiOutlineShoppingCart />
          </ButtonWithBadge>
        </BtnWrapper>
        <UserProfile />
      </HeaderContainer>
    </HeaderStyled>
  );
};
Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
