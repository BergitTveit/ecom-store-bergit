import { css } from "styled-components";
export const breakpoints = {
  sm: "640px", // mobile
  md: "768px", // tablet
  lg: "1024px", // laptop
  xl: "1280px", // desktop
};

export const headerHeight = {
  desktop: "80px",
  tablet: "70px",
  mobile: "60px",
};

export const mainLayoutStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const mainContentStyle = css`
  flex: 1;
  padding: 20px 0;
`;

export const colors = {
  primary: "#fe3a64",
  secondary: "#f090fc",
  black: "#333333",
  white: "#ffffff",
  hover: "#fe3a64",
  blueForest: "#207178",
  error: "#dc3545",
};

export const flexCenter = css`
  display: flex;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// export const buttonStyle = css`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// export const mobile = (inner: any) => css`
//   @media (max-width: 768px) {
//     ${inner}
//   }
// `;
