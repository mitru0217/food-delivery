import { create } from 'zustand';

export const useBadgeCountStore = create(set => ({
  badgeCount: 0,
  setBadgeCount: count => set({ badgeCount: count }),
}));



export const useShopStore = create(set => ({
  partners: [],
  products: [],
  selectedSupplier: null,
  isLoading: false,
  error: null,
  setSuppliersPartners: suppliers => set({ suppliers }),
  setProducts: products => set({ products }),
  setSelectedSupplier: supplierId => set({ selectedSupplier: supplierId }),
  setIsLoading: loading => set({ isLoading: loading }),
  setError: error => set({ error }),
}));