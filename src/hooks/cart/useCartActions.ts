import { useNavigate } from "react-router-dom";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../store/slices/cartSlice";
import { useAppDispatch } from "../redux";

export const useCartActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return {
    updateQuantity: (id: string, quantity: number) => {
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

    removeItem: (id: string) => {
      try {
        dispatch(removeFromCart(id));
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    },

    clearCart: () => {
      try {
        dispatch(clearCart());
      } catch (error) {
        console.error("Error clearing cart:", error);
      }
    },

    navigateToCart: () => {
      try {
        navigate("/cart");
      } catch (error) {
        console.error("Error navigating to cart:", error);
      }
    },

    navigateToCheckout: () => {
      try {
        navigate("/checkout");
      } catch (error) {
        console.error("Error navigating to checkout:", error);
      }
    },

    continueShopping: () => {
      try {
        navigate("/");
      } catch (error) {
        console.error("Error navigating to home:", error);
      }
    },
  };
};
