import styled from "styled-components";
import {
  colors,
  containerStyle,
  flexBetween,
  flexCenter,
  headerHeight,
} from "../../assets/styles/shared";

export const HeaderContainer = styled.header`
  ${containerStyle}
  ${flexBetween}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${colors.secondary};
  height: ${headerHeight.mobile}
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
    height: ${headerHeight.tablet};
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    height: ${headerHeight.desktop};
    padding: 0 4rem;
  }
`;

export const LogoContainer = styled.div`
  ${flexCenter}
  flex: 0 0 auto;
  img {
    height: 35px;
    width: auto;
    transition: height 0.3s ease;

    @media (min-width: 768px) {
      height: 40px;
    }

    @media (min-width: 1024px) {
      height: 50px;
    }
  }
`;
