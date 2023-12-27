import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminApi from '../http/adminApi';

const API_URL = `http://localhost:5000/api`;

const useAdminStore = create(set => ({
  isKeyAuthenticated: false,
  user: {},
  loading: false,
  isAuth: false,
  setIsKeyAuth: isKeyAuthenticated => {
    set({ isKeyAuthenticated });
    localStorage.setItem(
      'isKeyAuthenticated',
      isKeyAuthenticated ? 'true' : 'false'
    );
  },

  setIsAuth: isAuth => {
    set({ isAuth });
  },

  login: async (email, password) => {
    try {
      set({ loading: true });
      const response = await AdminApi.adminLogin(email, password);
      const { user, accessToken } = response.data;
      // Сохранение данных пользователя после успешного входа
      set({ user, loading: false });
      set(state => ({ ...state, isAuth: true }));
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', accessToken);
      localStorage.setItem('isAuth', 'true');
    } catch (error) {
      set({ loading: false });
      console.log('Login error:', error.response.data.message);
      toast.error(error.response.data.message),
        { position: toast.POSITION.TOP_CENTER };
    }
  },

  register: async (name, email, password) => {
    try {
      set({ loading: true });
      const response = await AdminApi.adminRegister(name, email, password);
      const { user, accessToken } = response.data;
      set({ user, loading: false });
      set(state => ({ ...state, isAuth: true }));
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', accessToken);
      localStorage.setItem('isAuth', 'true');
    } catch (error) {
      set({ loading: false });
      // Обработка ошибок при регистрации
      console.log('Register error:', error.response.data.message);
      toast.error(error.response.data.message),
        { position: toast.POSITION.TOP_CENTER };
    }
  },

  logout: async () => {
    try {
      set({ loading: true });
      await AdminApi.adminLogout();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isAuth');
      localStorage.removeItem('isKeyAuthenticated');
      // Выход выполнен успешно - сброс данных пользователя и isAuth
      set({ user: {}, loading: false });
      set(state => ({ ...state, isAuth: false }));
    } catch (error) {
      set({ loading: false });
      // Обработка ошибок при выходе
      console.log('Exit error:', error.message);
    }
  },
  checkAuth: async () => {
    try {
      const response = await axios.get(`${API_URL}/admin/refresh`, {
        withCredentials: true,
      });

      const { user, accessToken } = response.data;
      set({ user, loading: false });
      set(state => ({ ...state, isAuth: true }));
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', accessToken);
      localStorage.setItem('isAuth', 'true');
    } catch (error) {
      console.log('Check error:', error.response.data.message);
      toast.error(error.response.data.message),
        { position: toast.POSITION.TOP_CENTER };
    } finally {
      set({ loading: false });
    }
  },
}));

export default useAdminStore;
