import { useEffect } from "react";
import { fetchProducts } from "../../store/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import ProductCard from "../ProductCard";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, initialized } = useAppSelector((state) => state.products);
  useEffect(() => {
    if (!initialized) {
      dispatch(fetchProducts());
    }
  }, [dispatch, initialized]);
  useEffect(() => {
    if (products.length > 0) {
      const allTags = products.flatMap(product => product.tags);
      const uniqueTags = [...new Set(allTags)];
      console.log('All unique tags:', uniqueTags);
    }
  }, [products]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
