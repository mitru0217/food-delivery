import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import {
  Greeting,
  ProfileContainer,
  GreetingWrapper,
} from './UserProfile.styled';
import LogOut from '../LogOut/LogOut';
// import { useAuthStore } from '../../../../zustand/store';

export const UserProfile = () => {
  // Получение данных пользователя из localStorage после перезагрузки страницы
  const storedUser = localStorage.getItem('user');
  // Парсинг сохраненного объекта пользователя из localStorage
  const user = storedUser ? JSON.parse(storedUser) : {};

  return (
    <ProfileContainer>
      <GreetingWrapper>
        <Avatar avatarUrl={user.avatar} />
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
