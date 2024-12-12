import { Product } from "../../../../api/api.types";
import PriceComponent from "../../../UI/PriceComponents";
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

      <div className="mt-2">
        <PriceComponent
          price={product.price}
          discountedPrice={product.discountedPrice}
          showDiscountBadge={true}
          showOriginalPrice={true}
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
