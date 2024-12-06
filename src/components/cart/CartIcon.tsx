import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { cartActions } from "../../actions/cartActions";

export const CartIcon = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  //should the counter be its own util as well?

  return (
    <div
      onClick={() => cartActions.handleNavigateToCart(navigate)}
      className="relative"
    >
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-lg cursor-pointer text-black hover:text-primary transition-colors"
      />
      <span className="absolute -top-3 -right-6 bg-primary text-white rounded-full px-2 py-0.5 text-xs min-w-4 text-center">
        {itemCount}
      </span>
    </div>
  );
};
