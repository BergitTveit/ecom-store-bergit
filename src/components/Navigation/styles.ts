import styled from "styled-components";
import { colors, flexCenter, mobile } from "../../assets/styles/shared";

export const Nav = styled.nav`
  ${flexCenter}
  flex: 1;
  margin: 0 2rem;

  ${mobile`
    display: none;
  `}
`;

export const NavList = styled.ul`
  ${flexCenter}
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
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
