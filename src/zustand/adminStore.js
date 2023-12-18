import { create } from 'zustand';

const useAdminStore = create(set => ({
  isKeyAuthenticated: false,
  setIsKeyAuth: isKeyAuthenticated => {
    set({ isKeyAuthenticated });
  },
}));

export default useAdminStore;
