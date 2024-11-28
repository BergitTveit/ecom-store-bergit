import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../api/index";
import { Product } from "../../api/api.types";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  initialized: false,
};

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  return await productsApi.getAll();
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.initialized = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default productSlice.reducer;
