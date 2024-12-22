import { Product } from "../../../../api/api.types";
import PriceComponent from "../../../UI/PriceComponents";
import { useProducts } from "../../../../hooks/products";
import { Button } from "../../../UI/Button";

interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const { handleNavigateToProduct } = useProducts();

  return (
    <article className="flex flex-col h-[420px] border rounded-lg p-4 shadow hover:shadow-lg">
      <div
        onClick={() => handleNavigateToProduct(product.id)}
        className="h-48 cursor-pointer"
      >
        <img
          src={product.image.url}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <section className="flex flex-col flex-1">
        <h2 className="text-lg font-bold line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h2>

        <div className="min-h-[4.5rem]">
          <PriceComponent
            price={product.price}
            discountedPrice={product.discountedPrice}
            showDiscountBadge
            showOriginalPrice
          />
        </div>

        <Button
          onClick={() => handleNavigateToProduct(product.id)}
          variant="primary"
          fullWidth
          className="mt-auto"
        >
          View Product
        </Button>
      </section>
    </article>
  );
};
