import styled from "styled-components";
import { colors, flexCenter } from "../../assets/styles/shared";

export const NavigationContainer = styled.nav`
  flex: 1;
  display: none; // Hide on mobile by default

  @media (min-width: 768px) {
    ${flexCenter}
    margin: 0 2rem;
  }
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

      @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    }

    @media (min-width: 1024px) {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }

  h3 {
    margin: 0;
    font-size: 0.9rem;
  }
`;
