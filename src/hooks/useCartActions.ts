import { useAppDispatch } from "./reduxHooks";
import { cartActions } from "../actions/cartActions";

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  return {
    updateQuantity: (id: string, quantity: number) =>
      cartActions.handleQuantityChange(dispatch, id, quantity),
    removeItem: (id: string) => cartActions.handleRemoveItem(dispatch, id),
    clearCart: () => cartActions.handleClearCart(dispatch),
    navigateToCart: (navigate: Function) =>
      cartActions.handleNavigateToCart(navigate),
    navigateToCheckout: (navigate: Function) =>
      cartActions.handleNavigateToCheckout(navigate),
    continueShopping: (navigate: Function) =>
      cartActions.handleContinueShopping(navigate),
  };
};
