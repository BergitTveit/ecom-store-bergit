import { Product } from "../../api/api.types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/product/${product.id}`);
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <div onClick={handleClick}>
        <img
          src={product.image.url}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </div>

      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={handleClick}
        className="mt-4 bg-primary text-white px-4 py-2 rounded-lg w-full"
      >
        View Product
      </button>
    </div>
  );
};

export default ProductCard;
