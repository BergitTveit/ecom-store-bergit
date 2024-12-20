import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productsApi } from "../../api/products.api";

export interface TagsState {
  tags: string[];
  loading: boolean;
  error: string | null;
}
const initialState: TagsState = {
  tags: [],
  loading: false,
  error: null,
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const products = await productsApi.getAll();
  const allTags = products.reduce((tags: string[], product) => {
    return [...tags, ...product.tags];
  }, []);
  return Array.from(new Set(allTags)); // Remove duplicates
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTags.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.tags = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default tagsSlice.reducer;
