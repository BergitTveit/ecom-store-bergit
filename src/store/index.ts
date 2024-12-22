import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/products";
import { cartReducer } from "./slices/cart";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
