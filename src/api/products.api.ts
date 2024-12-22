import { api } from "./config";
import { Product, ApiResponse } from "./api.types";
import { MAIN_CATEGORIES, MainCategory } from "../components/features/layout/Navigation/categories/constants";

export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get<ApiResponse<Product[]>>("");
    return response.data.data;
  },
  getById: async (id: string): Promise<Product> => {
    const response = await api.get<ApiResponse<Product>>(`/${id}`);
    return response.data.data;
  }, 
  getCategories: (): MainCategory[] => {
    return MAIN_CATEGORIES;
  }

};
