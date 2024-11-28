import { useEffect } from "react";
import { fetchProducts } from "../../store/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, initialized } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (!initialized) {
      dispatch(fetchProducts());
    }
  }, [dispatch, initialized]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
