// components/Footer/styles.ts
import styled from "styled-components";
import { colors, containerStyle, flexCenter } from "../../assets/styles/shared";

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${colors.secondary};
  padding: 2rem 0;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;

export const FooterSection = styled.div`
  ${flexCenter}
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  h4 {
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
    color: ${colors.black};
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li a {
    color: ${colors.black};
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    color: ${colors.black};
    font-size: 1.5rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const FooterLinks = styled.li`
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

export const Copyright = styled.div`
  ${containerStyle}
  ${flexCenter}
  padding: 1rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  color: ${colors.black};
`;
