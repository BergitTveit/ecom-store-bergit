import styled from "styled-components";
import { colors, flexCenter } from "../../assets/styles/shared";

export const IconsContainer = styled.div`
  ${flexCenter}
  flex: 0 0 auto;
  margin-left: auto;
  padding-left: 1rem;
  min-width: 40px;

  @media (max-width: 767px) {
    position: relative;
    right: 0;
  }
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

export const CartIconContainer = styled.div`
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
