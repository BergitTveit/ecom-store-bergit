import { Product } from "../../../../api";

import PriceComponent from "../../../UI/PriceComponents";
import { useProducts } from "../../../../hooks/useProducts";
import { Button } from "../../../UI/Button";

interface ProductDetailsProps {
  product: Product;
}
export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { handleAddToCart } = useProducts();

  return (
    <section className="container mx-auto p-4">
      <article className="flex flex-col md:grid md:grid-cols-2 md:gap-8 items-center md:items-start">
        <div className="max-w-md w-full rounded-lg">
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>

        <div className="max-w-md w-full space-y-4 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>

          <PriceComponent
            price={product.price}
            discountedPrice={product.discountedPrice}
            showDiscountBadge
            showOriginalPrice
          />

          <Button onClick={() => handleAddToCart(product)} variant="primary">
            Add to Cart
          </Button>

          {product.reviews.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              {product.reviews.map((review) => (
                <article
                  key={review.id}
                  className="mb-4 p-4 bg-gray-50 rounded-lg"
                >
                  <h3 className="font-bold">{review.username}</h3>
                  <p>Rating: {review.rating}/5</p>
                  <p>{review.description}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </article>
    </section>
  );
};
