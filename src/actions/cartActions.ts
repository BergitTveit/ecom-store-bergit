import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../store/slices/cartSlice";
import { AppDispatch } from "../store/store";

export const cartActions = {
  handleQuantityChange: (
    dispatch: AppDispatch,
    id: string,
    quantity: number
  ): void => {
    try {
      if (quantity < 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(updateQuantity({ id, quantity }));
      }
    } catch (error) {
      console.error("Error updating cart quantity:", error);
    }
  },

  handleRemoveItem: (dispatch: AppDispatch, id: string): void => {
    try {
      dispatch(removeFromCart(id));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  },

  handleClearCart: (dispatch: AppDispatch): void => {
    try {
      dispatch(clearCart());
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  },

  handleNavigateToCart: (navigate: Function): void => {
    try {
      navigate("/cart");
    } catch (error) {
      console.error("Error navigating to cart:", error);
    }
  },

  handleNavigateToCheckout: (navigate: Function): void => {
    try {
      navigate("/checkout");
    } catch (error) {
      console.error("Error navigating to checkout:", error);
    }
  },

  handleContinueShopping: (navigate: Function): void => {
    try {
      navigate("/");
    } catch (error) {
      console.error("Error navigating to home:", error);
    }
  },
};
