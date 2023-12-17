import PropTypes from 'prop-types';
import AvatarLoader from '../../assets/icons/loader.svg';
import { Thumb, Img, AvatarIcon } from './AvatarThumbnail.styled';

const AvatarThumbnail = ({ loading, user, avatarFromLocalStorage }) => {
  return (
    <>
      {loading ? (
        <Thumb>
          <img src={AvatarLoader} alt="Loading" />
        </Thumb>
      ) : user ? (
        <Thumb>
          <Img src={user.avatar || avatarFromLocalStorage} alt="User Avatar" />
        </Thumb>
      ) : (
        <Thumb>
          <AvatarIcon />
        </Thumb>
      )}
    </>
  );
};

AvatarThumbnail.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
  }),
  avatarFromLocalStorage: PropTypes.string,
};

export default AvatarThumbnail;
