import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "./reduxHooks";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0
  );
  //Move to utils.

  const handleQuantityChange = useCallback(
    (id: string, quantity: number) => {
      if (quantity < 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(updateQuantity({ id, quantity }));
      }
    },
    [dispatch]
  );

  const handleRemoveItem = useCallback(
    (id: string) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  return {
    cartItems,
    total,
    handleQuantityChange,
    handleRemoveItem,
  };
};

export {};
