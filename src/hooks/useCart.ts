import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "./reduxHooks";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import { calculateCartTotal } from "../utils/priceCalculators";
import { cartActions } from "../actions/cartActions";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const total = calculateCartTotal(cartItems);

  const handleQuantityChange = useCallback(
    (id: string, quantity: number) => {
      cartActions.handleQuantityChange(dispatch, id, quantity);
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
