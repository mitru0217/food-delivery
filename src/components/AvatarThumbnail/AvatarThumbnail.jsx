import PropTypes from 'prop-types';
import AvatarLoader from '../../assets/icons/loader.svg';
import { Thumb, Img, AvatarIcon } from './AvatarThumbnail.styled';

const AvatarThumbnail = ({ loading, avatarUrl, avatarFromLocalStorage }) => {
  return (
    <>
      {loading ? (
        <Thumb>
          <img src={AvatarLoader} alt="Loading" />
        </Thumb>
      ) : (
        <Thumb>
          {avatarUrl ? (
            <Img src={avatarUrl} alt="User Avatar" />
          ) : avatarFromLocalStorage ? (
            <Img src={avatarFromLocalStorage} alt="User Avatar" />
          ) : (
            <AvatarIcon />
          )}
        </Thumb>
      )}
    </>
  );
};

AvatarThumbnail.propTypes = {
  loading: PropTypes.bool,
  avatarUrl: PropTypes.string,
  // user: PropTypes.shape({
  //   avatar: PropTypes.string,
  // }),
  avatarFromLocalStorage: PropTypes.string,
};

export default AvatarThumbnail;
