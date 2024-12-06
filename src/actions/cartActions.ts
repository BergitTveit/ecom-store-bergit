import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import { AppDispatch } from "../store/store";

const cartActions = {
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
};
//check bp export syntax

export default cartActions;
