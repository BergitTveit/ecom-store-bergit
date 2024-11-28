import ProductList from "../components/ProductList";
import { useAppSelector } from "../hooks/reduxHooks";

const HomePage = () => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Wip: List of products</h1>
      {/* <ProductList /> Resolve request error. Too many requests.. */}
      <h2>test</h2>
    </div>
  );
};

export default HomePage;
