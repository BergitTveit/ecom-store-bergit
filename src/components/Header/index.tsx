import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HeaderContainer, LogoContainer } from "./styles";
import Navigation from "../Navigation";
import CartIcon from "../CartIcon";
import { IconsContainer } from "../CartIcon/styles";

const Header = (props: { basic?: boolean }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="Obsess and Possess Logo" />
        </Link>
      </LogoContainer>
      <Navigation />
      <CartIcon />
    </HeaderContainer>
  );
};

export default Header;
