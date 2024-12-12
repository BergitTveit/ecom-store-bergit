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
    <div className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col h-[420px]">
      <div onClick={() => handleNavigateToProduct(product.id)} className="h-48">
        <img
          src={product.image.url}
          alt={product.title}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </div>

      <div className="flex flex-col h-full">
        <div>
          <h2 className="text-lg font-bold line-clamp-2 min-h-[3.5rem]">
            {product.title}
          </h2>
          <div className="min-h-[4.5rem]">
            <PriceComponent
              price={product.price}
              discountedPrice={product.discountedPrice}
              showDiscountBadge={true}
              showOriginalPrice={true}
            />
          </div>
        </div>
        <div className="mt-auto">
          <Button
            onClick={() => handleNavigateToProduct(product.id)}
            variant="primary"
            fullWidth
          >
            View Product
          </Button>
        </div>
      </div>
    </div>
  );
};
