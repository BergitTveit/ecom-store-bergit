import styled from "styled-components";
import {
  colors,
  containerStyle,
  flexBetween,
  flexCenter,
  headerHeight,
  mobile,
} from "../../assets/styles/shared";

export const HeaderContainer = styled.header`
  ${containerStyle}
  ${flexBetween}
  background: ${colors.secondary};
  height: ${headerHeight.desktop}
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;
// Add mobile height, with two arguments later into header.

export const LogoContainer = styled.div`
  ${flexCenter}

  img {
    height: 50px;
    width: auto;

    ${mobile`
      height: 40px;
    `}
  }
`;


export const IconsContainer = styled.div`
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

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartCount = styled.span`
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
