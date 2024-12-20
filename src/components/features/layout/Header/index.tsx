import { Navigation } from "../Navigation";
import { CartIcon } from "../../cart/CartIcon";
import { Logo } from "../../../UI/logo";

export const Header = (props: { basic?: boolean }) => {
  return (
    <header className="sticky top-0 left-0 w-full bg-primary shadow-md z-50">
      <div className="container-width container-padding h-14 md:h-16 lg:h-20 flex items-center">
        <div className="flex items-center w-full">
          <div className="md:hidden">
            <Navigation />
          </div>

          <div className="hidden md:flex md:items-center md:justify-between md:w-full">
            <Logo />
            <Navigation />
            <CartIcon />
          </div>

          <div className="flex items-center justify-between w-full md:hidden">
            <div className="flex-1" />
            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo />
            </div>
            <div className="flex-1 flex justify-end">
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
