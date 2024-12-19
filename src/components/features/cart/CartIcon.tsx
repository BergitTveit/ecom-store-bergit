import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../../hooks/useCart";
import { useCartActions } from "../../../hooks/useCartActions";

export const CartIcon = () => {
  const { itemCount } = useCart();
  const { navigateToCart } = useCartActions();
  const itemCounter = itemCount;

  return (
    <div onClick={navigateToCart} className="relative">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-lg cursor-pointer text-black hover:text-secondary transition-colors"
      />
      <span className="absolute -top-3 -right-6 bg-primary text-white rounded-full px-2 py-0.5 text-xs min-w-4 text-center">
        {itemCounter}
      </span>
    </div>
  );
};
