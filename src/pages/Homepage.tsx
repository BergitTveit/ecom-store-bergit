import { useAppSelector } from "../hooks/reduxHooks";

// import ProductList from "../components/ProductList";

const HomePage = () => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Home Page</h1>
      {/* Products */}
    </div>
  );
};

export default HomePage;
