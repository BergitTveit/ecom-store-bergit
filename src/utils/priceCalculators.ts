import { ICartItem } from "../components/features/cart/cart.types";

export const calculateDiscount = (price: number, discountedPrice: number) => {
  if (price === discountedPrice) return null;

  const discount = price - discountedPrice;
  const discountPercentage = Math.round((discount / price) * 100);
  return { amount: discount, percentage: discountPercentage };
};


export const calculateCartTotal = (items: ICartItem[]): number => {
  return items.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0
  );
};
