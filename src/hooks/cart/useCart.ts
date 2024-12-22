import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { calculateCartTotal } from "../../utils/priceCalculators";
import { removeFromCart, updateQuantity } from "../../store/slices/cartSlice";

export const useCart = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const total = calculateCartTotal(cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = useCallback(
    (id: string, quantity: number) => {
      try {
        if (quantity < 1) {
          dispatch(removeFromCart(id));
        } else {
          dispatch(updateQuantity({ id, quantity }));
        }
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    },
    [dispatch]
  );

  const handleRemoveItem = useCallback(
    (id: string) => {
      try {
        dispatch(removeFromCart(id));
      } catch (error) {
        console.error("Error removing item:", error);
      }
    },
    [dispatch]
  );

  return {
    cartItems,
    total,
    itemCount,
    handleQuantityChange,
    handleRemoveItem,
  };
};
