import PropTypes from 'prop-types';

import { HeaderStyled, BtnWrapper } from './Header.styled';
import Button from '../Buttons/SecondaryButton';
import ButtonWithBadge from '../Buttons/ButtonWithBadge/ButtonWithBadge';

import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Header = ({ onClick }) => {
  return (
    <HeaderStyled>
      <BtnWrapper>
        <Button>Shop</Button>
        <ButtonWithBadge text="Button" badgeContent={3} onClick={onClick}>
          <AiOutlineShoppingCart />
        </ButtonWithBadge>
        <Button>
          <AiOutlineUserAdd />
          Log In
        </Button>
      </BtnWrapper>
    </HeaderStyled>
  );
};
Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
