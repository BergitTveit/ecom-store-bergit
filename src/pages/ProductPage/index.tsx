import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProductById } from "../../store/slices/products";
import { ProductDetails } from "../../components/features/products/ProductDetails";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { currentProduct, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentProduct) return <div>Product not found</div>;

  return <ProductDetails product={currentProduct} />;
};

export default ProductPage;
