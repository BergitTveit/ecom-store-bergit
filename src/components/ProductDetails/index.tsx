import { Product } from "../../api";

interface ProductProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductProps) => {
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
          <div className="mb-4">
            {product.price !== product.discountedPrice && (
              <p className="text-gray-400 line-through">${product.price}</p>
            )}
            <p className="text-2xl font-bold">${product.discountedPrice}</p>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
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