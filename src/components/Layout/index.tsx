import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import { mainLayoutStyle, mainContentStyle } from "../../assets/styles/shared";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LayoutWrapper>
  );
};
const LayoutWrapper = styled.div`
  ${mainLayoutStyle}
`;

const MainContent = styled.main`
  ${mainContentStyle}
`;
export default Layout;
