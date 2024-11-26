import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";
import {
  colors,
  containerStyle,
  flexBetween,
  flexCenter,
  mobile,
} from "../../assets/styles/shared";

// import styles from './Header.module.css';
// check if it will become reusable type in arrow function, then move
// The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

const Header = (props: { basic?: boolean }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="Obsess and Possess Logo" />
        </Link>
      </LogoContainer>

      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <h3>Home</h3>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              <h3>Option 1</h3>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              <h3>Option 2</h3>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              <h3>Option 3</h3>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              <h3>SALE</h3>
            </Link>
          </NavItem>
        </NavList>
      </Nav>

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

const HeaderContainer = styled.header`
  ${containerStyle}
  ${flexBetween}
  background: ${colors.secondary};
  height: 80px; // Set a fixed header height
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${mobile`
    height: 60px; // Smaller height on mobile
  `}
`;
const LogoContainer = styled.div`
  ${flexCenter}

  img {
    height: 50px;
    width: auto;

    ${mobile`
      height: 40px;
    `}
  }
`;

const Nav = styled.nav`
  ${flexCenter}
  flex: 1;
  margin: 0 2rem;

  ${mobile`
    display: none;
  `}
`;

const NavList = styled.ul`
  ${flexCenter}
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    ${flexCenter}
    color: ${colors.black};
    text-decoration: none;
    gap: 0.5rem;
    padding: 0.5rem;

    &:hover {
      color: ${colors.primary};
    }

    svg {
      font-size: 1.2rem;
    }
  }

  h3 {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const IconsContainer = styled.div`
  ${flexCenter}
  gap: 1.5rem;

  svg {
    font-size: 1.2rem;
    cursor: pointer;
    color: ${colors.black};

    &:hover {
      color: ${colors.primary};
    }
  }
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  min-width: 1rem;
  text-align: center;
`;
