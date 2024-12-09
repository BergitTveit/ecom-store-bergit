import { useEffect, useState } from "react";
import ProductList from "../components/features/products/ProductList";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchProducts } from "../store/slices/productSlice";
import { filterProductsBySearch } from "../utils/searchFilters";
import { SearchBar } from "../components/features/search/Searchbar";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error, initialized } = useAppSelector(
    (state) => state.products
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!initialized) {
      dispatch(fetchProducts());
    }
  }, [dispatch, initialized]);

  if (!initialized && loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredProducts = filterProductsBySearch(products, searchTerm);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} products={products} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
