import axios from 'axios';
import { toast } from 'react-toastify';
import host from './index';

export const API_URL = `http://localhost:5000/api`;

export const registration = async (name, email, password) => {
  try {
    // Set loading to true before the request
    const { data } = await host.post('/user', {
      name,
      email,
      password,
      action: 'register',
    });
    localStorage.setItem('token', data.accessToken); // Используем accessToken
    localStorage.setItem('user', JSON.stringify(data.user)); //
    localStorage.setItem('isAuth', 'true');
    // Вернуть true, если регистрация прошла успешно
    return;
  } catch (error) {
    console.log('Register error:', error.response.data.message);
    toast.error(error.response.data.message),
      { position: toast.POSITION.TOP_CENTER };
    // Вернуть false в случае ошибки
    return;
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await host.post('/user', {
      email,
      password,
      action: 'login',
    });
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('isAuth', 'true');
    return true;
  } catch (error) {
    console.log('Register error:', error.response.data.message);
    toast.error(error.response.data.message),
      { position: toast.POSITION.TOP_CENTER };
    return false;
  }
};

export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('isAuth');
};

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/refresh`, {
      withCredentials: true,
    });

    const { user, accessToken } = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', accessToken);
    localStorage.setItem('isAuth', 'true');
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Token refresh failed, logging out...');
      logOut(); // Вызываем logOut, чтобы разлогинить пользователя
    } else {
      console.log(
        'Check error:',
        error.response ? error.response.data.message : error.message
      );
      toast.error(error.response.data.message),
        { position: toast.POSITION.TOP_CENTER };
    }
  }
};

export const Avatar = async formData => {
  try {
    const token = localStorage.getItem('token'); // Получение токена из localStorage
    console.log(token);
    if (!token) {
      // Обработка ситуации, если токен отсутствует в локальном хранилище
      console.error('Access token not found in localStorage');
      return null; // Или какое-то другое действие по вашему усмотрению
    }
    const response = await host.patch('/user/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`, // Добавление токена доступа в заголовок
      },
    });
    const { avatarUrl } = response.data;
    localStorage.setItem('avatar', avatarUrl);
    return avatarUrl; // Возвращаем avatarUrl из сервиса
  } catch (error) {
    console.log('Avatar error:', error.message);
    throw error; // Пробрасываем ошибку для обработки в сторе или компоненте
  }
};
