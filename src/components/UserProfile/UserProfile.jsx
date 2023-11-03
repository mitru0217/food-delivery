import PropTypes from 'prop-types';
import { useAuthStore } from '../../zustand/store';
import Avatar from '../Avatar/Avatar';
import { Greeting, ProfileContainer,GreetingWrapper } from './UserProfile.styled';
import LogOut from '../LogOut/LogOut';
export const UserProfile = ({ avatarUrl }) => {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <ProfileContainer>
      <GreetingWrapper>
        <Avatar avatarUrl={avatarUrl} />
        <Greeting>Hello, {user.name}!</Greeting>
      </GreetingWrapper>
      <LogOut />
    </ProfileContainer>
  );
};

UserProfile.propTypes = {
  avatarUrl: PropTypes.string,
};

export default UserProfile;
