import axios from "axios";
import { Product, ApiResponse } from "../types/api.types";

const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get<ApiResponse<Product[]>>("");
    return response.data.data;
  },
  getById: async (id: string): Promise<Product> => {
    const response = await api.get<ApiResponse<Product>>(`/${id}`);
    return response.data.data;
  },
};
