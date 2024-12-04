import { Product } from "../../api/api.types";
import { useNavigate } from "react-router-dom";
import DiscountBadge from "../UI/Discount";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/product/${product.id}`);
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <div onClick={handleClick}>
        <img
          src={product.image.url}
          alt={product.title}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </div>

      <h2 className="text-lg font-bold mt-2">{product.title}</h2>

      <div className="mt-2">
        {product.price !== product.discountedPrice && (
          <p className="text-gray-400 line-through">
            ${product.price.toFixed(2)}
          </p>
        )}
        <p className="text-xl font-bold">
          ${product.discountedPrice.toFixed(2)}
        </p>
        <DiscountBadge
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
      </div>

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
