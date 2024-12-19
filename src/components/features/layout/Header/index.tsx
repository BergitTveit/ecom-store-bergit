// import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.png";
import { Navigation } from "../Navigation";
import { CartIcon } from "../../cart/CartIcon";
import { Logo } from "../../../UI/logo";

export const Header = (props: { basic?: boolean }) => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-primary shadow-md">
      <div className="container-width container-padding flex items-center justify-between h-14 md:h-16 lg:h-20">
        <Logo />
        <Navigation />
        <CartIcon />
      </div>
    </header>
  );
};
