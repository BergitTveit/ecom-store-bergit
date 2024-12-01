import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartIcon = () => {
  return (
    <div className="flex items-center flex-none ml-auto pl-4 min-w-[40px] relative right-0 gap-6">
      <Link to="/checkout">
        <div className="relative cursor-pointer">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-lg cursor-pointer text-black hover:text-primary transition-colors"
          />
          <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs min-w-4 text-center">
            0
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;
