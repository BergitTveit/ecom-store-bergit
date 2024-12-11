import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-[60px] md:mt-[70px] lg:mt-[80px]">
        <div className="container-width container-padding">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
