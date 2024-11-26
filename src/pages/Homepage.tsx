import { useAppSelector } from '../hooks/reduxHooks';

const HomePage = () => {
  const { products, loading, error } = useAppSelector((state) => state.products);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;