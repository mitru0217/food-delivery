import { create } from 'zustand';
// import AuthService from '../services/AdminService';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { API_URL } from '../http/userApi';
// import host from '../http/index';
import {
  registration,
  login,
  logOut,
  checkAuth,
  Avatar,
} from '../http/userApi';

export const useUserStore = create((set, get) => ({
  user: null,
  token: null,
  isAuth: false,
  loading: false,
  loadingAvatar: false,
  avatar: null,

  setUser: user => set({ user }),
  setToken: token => set({ token }),
  setIsAuth: isAuth => set({ isAuth }),
  setLoading: loading => set({ loading }),
  setLoadingAvatar: loadingAvatar => set({ loadingAvatar }),
  setAvatar: avatarUrl =>
    set(state => ({
      ...state,
      user: { ...state.user, avatar: avatarUrl },
      loadingAvatar: false,
    })),

  // Methods using UserApi functions
  registerUser: async (name, email, password) => {
    try {
      get().setLoading(true); // Set loading to true before the request
      const token = await registration(name, email, password);
      get().setToken(token);
      get().setIsAuth(true);
    } catch (error) {
      console.log('Error during registration:', error);
    } finally {
      get().setLoading(false); // Set loading to false after the request completes
    }
  },

  loginUser: async (email, password) => {
    try {
      get().setLoading(true);
      const token = await login(email, password);
      get().setToken(token);
      get().setIsAuth(true);
    } catch (error) {
      console.log('Error during login:', error);
    } finally {
      get().setLoading(false); // Set loading to false after the request completes
    }
  },

  logoutUser: () => {
    logOut();
    get().setToken(null);
    get().setIsAuth(false);
    get().setUser(null);
    get().setAvatar(null);
    localStorage.removeItem('avatar');
    localStorage.removeItem('badgeCount');
  },

  checkAuthentication: async () => {
    get().setLoading(true);
    await checkAuth();
    // Check the local storage for user and token and set the state accordingly
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth') === 'true';
    const avatar = localStorage.getItem('avatar');
    get().setUser(user);
    get().setToken(token);
    get().setIsAuth(isAuth);
    get().setAvatar(avatar);
    get().setLoading(false);
  },

  updateUserAvatar: async formData => {
    try {
      set({ loadingAvatar: true });
      const avatarUrl = await Avatar(formData); // Используйте ваш метод Avatar для обновления аватара
      get().setAvatar(avatarUrl);
      // set(state => ({
      //   ...state,
      //   user: { ...state.user, avatar: avatarUrl },
      //   loadingAvatar: false,
      // }));
      localStorage.setItem('avatar', avatarUrl);
    } catch (error) {
      set({ loadingAvatar: false });
      console.log('Avatar error:', error.message);
    }
  },
}));
// export const useAuthStore = create(set => ({
//   user: {},
//   loading: false,
//   loadingAvatar: false,
//   isAuth: false,
//   avatar: null,

//   setIsAuth: isAuth => {
//     set({ isAuth });
//   },
//   login: async (email, password) => {
//     try {
//       set({ loading: true });
//       const response = await AuthService.login(email, password);
//       console.log(response);
//       const { user, accessToken } = response.data;
//       localStorage.setItem('user', JSON.stringify(user));
//       localStorage.setItem('token', accessToken);
//       localStorage.setItem('isAuth', 'true');
//       localStorage.setItem('avatar', user.avatar);
//       // Сохранение данных пользователя после успешного входа
//       set({ user, isAuth: true, loading: false });
//       return { user, accessToken };
//     } catch (error) {
//       set({ loading: false });
//       console.log('Login error:', error.response.data.message);
//     }
//   },

//   register: async (name, email, password) => {
//     try {
//       set({ loading: true });
//       const response = await AuthService.register(name, email, password);
//       const { user, accessToken } = response.data;
//       localStorage.setItem('user', JSON.stringify(user));
//       localStorage.setItem('token', accessToken);
//       localStorage.setItem('isAuth', 'true');
//       set({ user, isAuth: true, loading: false });
//     } catch (error) {
//       set({ loading: false });
//       // Обработка ошибок при регистрации
//       console.log('Register error:', error.response.data.message);
//       toast.error(error.response.data.message),
//         { position: toast.POSITION.TOP_CENTER };
//     }
//   },

//   logout: async () => {
//     try {
//       set({ loading: true });
//       await AuthService.logout();
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       localStorage.removeItem('isAuth');
//       localStorage.removeItem('badgeCount');
//       localStorage.removeItem('avatar');
//       // Выход выполнен успешно - сброс данных пользователя и isAuth
//       set({ user: {}, isAuth: false, loading: false });
//     } catch (error) {
//       set({ loading: false });
//       // Обработка ошибок при выходе
//       console.log('Exit error:', error.message);
//     }
//   },
//   checkAuth: async () => {
//     try {
//       const response = await axios.get(`${API_URL}/refresh`, {
//         withCredentials: true,
//       });

//       const { user, accessToken } = response.data;
//       localStorage.setItem('user', JSON.stringify(user));
//       localStorage.setItem('token', accessToken);
//       localStorage.setItem('isAuth', 'true');
//       set({ user, isAuth: true, loading: false });
//     } catch (error) {
//       console.log('Check error:', error.response.data.message);
//     } finally {
//       set({ loading: false });
//     }
//   },
// setAvatar: async formData => {
//   try {
//     set({ loadingAvatar: true });
//     const response = await apiUser.patch('/avatar', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     const { avatarUrl } = response.data;
//     set(state => ({
//       ...state,
//       user: { ...state.user, avatar: avatarUrl },
//       loadingAvatar: false,
//     }));
//     localStorage.setItem('avatar', avatarUrl);
//   } catch (error) {
//     set({ loadingAvatar: false });
//     console.log('Avatar error:', error.message);
//   }
// },
// }));

//   updateUserAvatar: async formData => {
//     try {
//       // Check authentication status before attempting to update the avatar
//       if (!get().isAuth) {
//         console.log('User not authenticated'); // Handle lack of authentication as needed
//         return;
//       }
//       get().setLoadingAvatar(true);
//       await Avatar(formData);
//       const avatar = localStorage.getItem('avatar');
//       get().setAvatar(avatar);
//     } catch (error) {
//       console.log('Avatar error:', error.message);
//     } finally {
//       get().setLoadingAvatar(false);
//     }
//   },
// }));
// updateUserAvatar: async formData => {
//   try {
//     // Check authentication status before attempting to update the avatar
//     if (!get().isAuth) {
//       console.log('User not authenticated');
//       return;
//     }
//     get().setLoadingAvatar(true);
//     const avatarUrl = await Avatar(formData); // Получаем avatarUrl из сервиса
//     get().setAvatar(avatarUrl); // Устанавливаем avatarUrl в сторе
//   } catch (error) {
//     console.log('Avatar error:', error.message);
//   } finally {
//     get().setLoadingAvatar(false);
//   }
// },

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
