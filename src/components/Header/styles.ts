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


