// import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.png";
import { Navigation } from "../Navigation";
import { CartIcon } from "../../cart/CartIcon";
import { Logo } from "../../../UI/logo";

export const Header = (props: { basic?: boolean }) => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-primary shadow-md">
      <div className="container-width container-padding flex items-center justify-between h-[60px] md:h-[70px] lg:h-[80px]">
        <Logo />
        <Navigation />
        <CartIcon />
      </div>
    </header>
  );
};
