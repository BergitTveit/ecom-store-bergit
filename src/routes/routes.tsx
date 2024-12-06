import { Routes, Route } from "react-router-dom";
import Layout from "../components/features/layout/Layout";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutSuccessPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
