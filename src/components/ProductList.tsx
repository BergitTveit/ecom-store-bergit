// src/components/ProductList.tsx
import React, { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const ProductList = () => {
  const dispatch = useAppDispatch(); // Use typed dispatch
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  ); // Use typed selector

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
