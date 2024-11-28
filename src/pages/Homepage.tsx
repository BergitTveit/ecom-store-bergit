import ProductList from "../components/ProductList";
import { useAppSelector } from "../hooks/reduxHooks";

const HomePage = () => {
  const { loading, error, initialized } = useAppSelector(
    (state) => state.products
  );

  if (!initialized && loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ProductList />
    </div>
  );
};

export default HomePage;
