import { calculateDiscount } from "../../utils/priceCalculators";

interface DiscountBadgeProps {
  price: number;
  discountedPrice: number;
}

const DiscountBadge = ({ price, discountedPrice }: DiscountBadgeProps) => {
  const discount = calculateDiscount(price, discountedPrice);

  if (!discount) return null;

  return (
    <div className="text-green-600 font-medium">
      Save ${discount.amount.toFixed(2)} ({discount.percentage}% off)
    </div>
  );
};

export default DiscountBadge;
