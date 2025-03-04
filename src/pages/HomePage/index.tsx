import { useEffect } from "react";
import ProductList from "../../components/features/products/ProductList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProducts } from "../../store/slices/products";
import { SearchBar } from "../../components/features/search/Searchbar";
import { useCategoryFilter } from "../../hooks/products";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error, initialized } = useAppSelector(
    (state) => state.products
  );
  const { filteredProducts, setSearchTerm } = useCategoryFilter();

  useEffect(() => {
    if (!initialized) {
      dispatch(fetchProducts());
    }
  }, [dispatch, initialized]);

  if (!initialized && loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section>
      <SearchBar onSearch={setSearchTerm} products={products} />
      <ProductList products={filteredProducts} />
    </section>
  );
};

export default HomePage;
