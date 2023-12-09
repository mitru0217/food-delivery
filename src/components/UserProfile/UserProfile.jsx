import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import {
  Greeting,
  ProfileContainer,
  GreetingWrapper,
} from './UserProfile.styled';
import LogOut from '../LogOut/LogOut';

export const UserProfile = ({ avatarUrl }) => {
  // Получение данных пользователя из localStorage после перезагрузки страницы
  const storedUser = localStorage.getItem('user');
  // Парсинг сохраненного объекта пользователя из localStorage
  const user = storedUser ? JSON.parse(storedUser) : {};
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
