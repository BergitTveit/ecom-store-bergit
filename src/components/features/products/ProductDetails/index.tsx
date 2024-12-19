import { Product } from "../../../../api";

import PriceComponent from "../../../UI/PriceComponents";
import { useProducts } from "../../../../hooks/useProducts";
import { Button } from "../../../UI/Button";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { handleAddToCart } = useProducts();

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mt-2">
            <PriceComponent
              price={product.price}
              discountedPrice={product.discountedPrice}
              showDiscountBadge
              showOriginalPrice
            />
          </div>
          <Button onClick={() => handleAddToCart(product)} variant="primary">
            Add to Cart
          </Button>
          {/* Make review component */}
          {product.reviews.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              {product.reviews.map((review) => (
                <div key={review.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold">{review.username}</p>
                  <p>Rating: {review.rating}/5</p>
                  <p>{review.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
