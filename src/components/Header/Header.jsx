
import PropTypes from 'prop-types';
import { HeaderStyled, BtnWrapper } from './Header.styled';
import Button from '../Buttons/SecondaryButton';
import ButtonWithBadge from '../Buttons/ButtonWithBadge/ButtonWithBadge';
import { useStore} from '../../zustand/store';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Header = ({ onClick }) => {

  const badgeCount = useStore((state) => state.badgeCount);

  return (
    <HeaderStyled>
      <BtnWrapper>
        <Button>Shop</Button>
        <ButtonWithBadge text="Button" onClick={onClick} badgeCount={badgeCount}>
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

