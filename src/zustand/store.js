import { create } from 'zustand';

export const useStore = create(set => ({
  badgeCount: 0,
  suppliers: [],
  products: [],
  selectedSuppliers: null,
  isLoading: false,
  error: null,
  quantity: 1,
  selectedSizePrice: null,
  setBadgeCount: count => set({ badgeCount: count }),
  setQuantity: count => set({ quantity: count }),
  setSuppliers: suppliers => set({ suppliers }),
  setProducts: products => set({ products }),
  setSelectedSuppliers: supplierId => set({ selectedSuppliers: supplierId }),
  setIsLoading: loading => set({ isLoading: loading }),
  setError: error => set({ error }),
  setSelectedSizePrice: price => set({ selectedSizePrice: price }),
}));