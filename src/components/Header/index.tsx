import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  HeaderContainer,
  LogoContainer,
  IconsContainer,
  CartIcon,
  CartCount,
} from "./styles";
import Navigation from "../Navigation";

const Header = (props: { basic?: boolean }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="Obsess and Possess Logo" />
        </Link>
      </LogoContainer>
      <Navigation />
      <IconsContainer>
        <FontAwesomeIcon icon={faSearch} />
        <Link to="/cart">
          <CartIcon>
            <FontAwesomeIcon icon={faShoppingCart} />
            <CartCount>0</CartCount>
          </CartIcon>
        </Link>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
