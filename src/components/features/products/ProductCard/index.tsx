import { Product } from "../../../../api/api.types";
import { DiscountBadge } from "../../../UI/Discount";
import { useProducts } from "../../../../hooks/useProducts";
import { Button } from "../../../UI/Button";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { handleNavigateToProduct } = useProducts();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <div onClick={() => handleNavigateToProduct(product.id)}>
        <img
          src={product.image.url}
          alt={product.title}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </div>

      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      {/* Make price Component, and include discountBadge in here */}
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
      <Button
        onClick={() => handleNavigateToProduct(product.id)}
        variant="primary"
        fullWidth
      >
        View Product
      </Button>
    </div>
  );
};
