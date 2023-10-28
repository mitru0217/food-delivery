import { create } from 'zustand';

export const useStore = create(set => ({
  badgeCount: 0,
  orderedProducts: [],
  selectedSuppliers: null,
  isLoading: false,
  error: null,
  quantity: 1,
  selectedSizePrice: null,
  setBadgeCount: (count) => {
    set({ badgeCount: count });
    localStorage.setItem('badgeCount', count.toString()); // Сохраняем в localStorage
  },
  setQuantity: quantity => set({ quantity: quantity }),
  setOrderedProducts: products => set({ products }),
  setSelectedSuppliers: supplierId => set({ selectedSuppliers: supplierId }),
  setIsLoading: loading => set({ isLoading: loading }),
  setError: error => set({ error }),
}));

export const useStoreOrder = create(set => ({
  orderedProducts: [],
  quantity: 1,
  totalPriceForProduct: 0,
  totalPrice: 0,
setOrderedProducts: products => set({ products }),
setQuantity: quantity => set({ quantity }),
setTotalPriceForProduct: price => set({ totalPriceForProduct: price }),
setTotalPrice: price => set({ totalPrice: price }),
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



