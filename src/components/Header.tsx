import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// check if it will become reusable type, then move
// The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.
const Header = (props: { basic?: boolean }) => {
  return (
    <header>
      <div>
        <h1>COM STORE</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
