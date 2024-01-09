import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = `http://localhost:5000/api`;

export const useCategoryStore = create((set, get) => ({
  category: null,
  categoryImg: null,
  setCategory: newCategory => set({ category: newCategory }),
  setCategoryImg: categoryImg => set({ categoryImg }),

  addCategory: async categoryName => {
    try {
      const response = await axios.post(`${API_URL}/category`, {
        name: categoryName,
      });
      const { id } = response.data;
      const { setCategory } = get();
      setCategory({ id, name: categoryName });
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.message),
        { position: toast.POSITION.TOP_CENTER };
    }
  },

  addCategoryImage: async (categoryId, formData) => {
    try {
      const response = await axios.patch(
        `${API_URL}/category/${categoryId}/image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.message),
        { position: toast.POSITION.TOP_CENTER };
    }
  },
}));
