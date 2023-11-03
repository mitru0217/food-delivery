import { create } from 'zustand';

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
  setBadgeCount: (count) => {
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
  resetAddressData: () => set({ addressData: { name: '', phoneNumber: '', city: '', street: '', number: '' } }),
  resetPaymentData: () => set({ paymentData: { cardHolderName: '', cardNumber: '', expiryDate: '', cvv: '' } }),
}));

export const useAuthStore = create(set => ({
  user: {},
  loading: true,
  setUser: async user => {
    set({ loading: true });
    set({ user, loading: false });
  },
  setAvatar: (avatar) => {
    set((state) => ({
      user: { ...state.user, avatar },
      loading: false,
    }));
  },
  logOut: () => set({ user: {} }),
  removeAvatar: () => {
    set((state) => ({
      user: { ...state.user, avatar: null },
      loading: false,
    }));
  },
}));

