
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

// check if it will become reusable type, then move
// The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.
const Header = (props: { basic?: boolean }) => {
  return (
    <header className="styles.header">
      <div>
        <h1>COM {/*LOGO  */}STORE</h1>
      </div>

      <nav className="{styles.nav}">
        <ul>
          <li> 
            <a href="/">
              <FontAwesomeIcon icon={faHome} />
              {/*alt text home */}
            </a>
             <h3>test
            
             </h3>
                {/*Tags */}
                  {/*Tags  */}
           
          </li>
        </ul>
      </nav>

 {/*Cart icon  */}


    </header>
  );
};

export default Header;
