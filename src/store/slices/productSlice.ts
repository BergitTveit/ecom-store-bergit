import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productsApi } from "../../api/index";
import { Product } from "../../api/api.types";
// import { RejectedAction } from "@reduxjs/toolkit/dist/createAsyncThunk"; Consider installing for rejected actions.

interface ProductState {
  products: Product[];
  currentProduct: Product | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

const initialState: ProductState = {
  products: [],
  currentProduct: null,
  loading: false,
  error: null,
  initialized: false,
};

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  return await productsApi.getAll();
});

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id: string) => {
    return await productsApi.getById(id);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductState) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductState, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
          state.initialized = true;
        }
      )
      .addCase(fetchProducts.rejected, (state: ProductState, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })

      .addCase(fetchProductById.pending, (state: ProductState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state: ProductState, action: PayloadAction<Product>) => {
          state.loading = false;
          state.currentProduct = action.payload;
        }
      )
      .addCase(fetchProductById.rejected, (state: ProductState, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default productSlice.reducer;
