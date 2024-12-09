import { calculateDiscount } from "../../utils/priceCalculators";

interface PriceComponentProps {
  price: number;
  discountedPrice: number;
  showDiscountBadge?: boolean;
  showOriginalPrice?: boolean;
}

const PriceComponent = ({
  price,
  discountedPrice,
  showDiscountBadge = true,
  showOriginalPrice = true,
}: PriceComponentProps) => {
  return (
    <div>
      {showOriginalPrice && price !== discountedPrice && (
        <p className="text-gray-400 line-through">${price.toFixed(2)}</p>
      )}
      <p className="text-xl font-bold">${discountedPrice.toFixed(2)}</p>
      {showDiscountBadge && (
        <DiscountBadge price={price} discountedPrice={discountedPrice} />
      )}
    </div>
  );
};

export default PriceComponent;
interface DiscountBadgeProps {
  price: number;
  discountedPrice: number;
}

export const DiscountBadge = ({
  price,
  discountedPrice,
}: DiscountBadgeProps) => {
  const discount = calculateDiscount(price, discountedPrice);

  if (!discount) return null;

  return (
    <div className="text-green-600 font-medium">
      Save ${discount.amount.toFixed(2)} ({discount.percentage}% off)
    </div>
  );
};
