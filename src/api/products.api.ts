import { api } from "./config";
import { Product, ApiResponse } from "./api.types";

export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get<ApiResponse<Product[]>>("");
    return response.data.data;
  },
  getById: async (id: string): Promise<Product> => {
    const response = await api.get<ApiResponse<Product>>(`/${id}`);
    return response.data.data;
  },
  getTags: async (): Promise<string[]> => {
    const products = await productsApi.getAll();
    const tags = products.reduce((allTags: string[], product) => {
      return [...allTags, ...product.tags];
    }, []);
    return Array.from(new Set(tags));
  },
};
