import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../hooks/reduxHooks";

const CartIcon = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div onClick={() => navigate("/cart")} className="relative">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-lg cursor-pointer text-black hover:text-primary transition-colors"
      />
      <span className="absolute -top-3 -right-6 bg-primary text-white rounded-full px-2 py-0.5 text-xs min-w-4 text-center">
        0
      </span>
      {/* Create Counter */}
    </div>
  );
};

export default CartIcon;
