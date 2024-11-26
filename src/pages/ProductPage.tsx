import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductPage;
