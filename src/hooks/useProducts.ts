import { useAppDispatch } from "./reduxHooks";
import { Product } from "../api";
import { addToCart } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigateToProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return {
    handleNavigateToProduct,
    handleAddToCart,
  };
};
