import styled from "styled-components";
import { headerHeight } from "../../assets/styles/shared";

export const MainContent = styled.main`
  margin-top: ${headerHeight.mobile};

  @media (min-width: 768px) {
    margin-top: ${headerHeight.tablet};
  }

  @media (min-width: 1024px) {
    margin-top: ${headerHeight.desktop};
  }
`;
