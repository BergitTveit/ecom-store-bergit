export const calculateDiscount = (price: number, discountedPrice: number) => {
  if (price === discountedPrice) return null;

  const discount = price - discountedPrice;
  const discountPercentage = Math.round((discount / price) * 100);
  return { amount: discount, percentage: discountPercentage };
};
