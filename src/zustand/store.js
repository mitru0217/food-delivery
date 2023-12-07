import { create } from 'zustand';
import AuthService from '../services/AuthService';
import axios from 'axios';
import { API_URL } from '../http';

export const useStore = create(set => ({
  badgeCount: 0,
  orderedProducts: [],
  selectedSuppliers: null,
  isLoading: false,
  error: null,
  quantity: 1,
  selectedSizePrice: null,
  totalPriceForProduct: 0,
  totalPrice: 0,
  setBadgeCount: count => {
    set({ badgeCount: count });
    localStorage.setItem('badgeCount', count.toString()); // Сохраняем в localStorage
  },
  setQuantity: quantity => set({ quantity: quantity }),
  setOrderedProducts: products => set({ products }),
  setSelectedSuppliers: supplierId => set({ selectedSuppliers: supplierId }),
  setTotalPriceForProduct: price => set({ totalPriceForProduct: price }),
  setTotalPrice: price => set({ totalPrice: price }),
  setIsLoading: loading => set({ isLoading: loading }),
  setError: error => set({ error }),
}));

export const useFormDataStore = create(set => ({
  addressData: {
    name: '',
    phoneNumber: '',
    city: '',
    street: '',
    number: '',
  },
  paymentData: {
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  },
  resetAddressData: () =>
    set({
      addressData: {
        name: '',
        phoneNumber: '',
        city: '',
        street: '',
        number: '',
      },
    }),
  resetPaymentData: () =>
    set({
      paymentData: {
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      },
    }),
}));

export const useAuthStore = create(set => ({
  user: {},
  loading: true,
  isAuth: false,

  setIsAuth: isAuth => {
    set({ isAuth });
  },
  login: async (email, password) => {
    try {
      set({ loading: true });
      const response = await AuthService.login(email, password);
      console.log(response);
      const { user, accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      // Сохранение данных пользователя после успешного входа
      set({ user, isAuth: true, loading: false });
    } catch (error) {
      set({ loading: false });
      console.log('Login error:', error.user?.message);
    }
  },

  register: async (name, email, password) => {
    try {
      set({ loading: true });
      const response = await AuthService.register(name, email, password);
      console.log(response);
      const { user, accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      set({ user, isAuth: true, loading: false });
    } catch (e) {
      set({ loading: false });
      // Обработка ошибок при регистрации
      console.log('Register error:', e.user?.message);
    }
  },

  logout: async () => {
    try {
      set({ loading: true });
      await AuthService.logout();
      localStorage.removeItem('token');
      // Выход выполнен успешно - сброс данных пользователя и isAuth
      set({ user: {}, isAuth: false, loading: false });
    } catch (error) {
      set({ loading: false });
      // Обработка ошибок при выходе
      console.log('Exit error:', error.message);
    }
  },
  checkAuth: async () => {
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      const { user, accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      set({ user, isAuth: true, loading: false });
    } catch (error) {
      console.log('Register error:', error.user?.message);
    }
  },
  setAvatar: avatar => {
    set(state => ({
      user: { ...state.user, avatar },
      loading: false,
    }));
  },
  removeAvatar: () => {
    set(state => ({
      user: { ...state.user, avatar: null },
      loading: false,
    }));
  },
}));
