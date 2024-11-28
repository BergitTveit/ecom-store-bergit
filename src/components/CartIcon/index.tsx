import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartCount, CartIconContainer, IconsContainer } from "./styles";

const CartIcon = () => {
  return (
    <IconsContainer>
      <Link to="/cart">
        <CartIconContainer>
          <FontAwesomeIcon icon={faShoppingCart} /> <CartCount>0</CartCount>
        </CartIconContainer>
      </Link>
    </IconsContainer>
  );
};

export default CartIcon;
