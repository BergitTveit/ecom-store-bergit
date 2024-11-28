import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navigation from "../Navigation";
import CartIcon from "../CartIcon";

const Header = (props: { basic?: boolean }) => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-secondary shadow-md flex items-center justify-between h-[60px] md:h-[70px] lg:h-[80px] px-4 md:px-8 lg:px-16 max-w-container mx-auto">
      <div className="flex items-center flex-none">
        <Link to="/">
          <img
            src={logo}
            alt="Obsess and Possess Logo"
            className="h-[35px] w-auto transition-all duration-300 md:h-[40px] lg:h-[50px]"
          />
        </Link>
      </div>
      <Navigation />
      {/* searchicon, to open searchbar?  */}
      <CartIcon />
    </header>
  );
};

export default Header;
