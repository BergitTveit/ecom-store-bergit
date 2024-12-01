import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchProductById } from "../store/slices/productSlice";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { currentProduct, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentProduct) return <div>Product not found</div>;
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={currentProduct.image.url}
            alt={currentProduct.title}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{currentProduct.title}</h1>
          <p className="text-gray-600 mb-4">{currentProduct.description}</p>
          <div className="mb-4">
            {currentProduct.price !== currentProduct.discountedPrice && (
              <p className="text-gray-400 line-through">
                ${currentProduct.price}
              </p>
            )}
            <p className="text-2xl font-bold">
              ${currentProduct.discountedPrice}
            </p>
          </div>
          <button>Add to Cart</button>

          {currentProduct.reviews.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              {currentProduct.reviews.map((review) => (
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

export default ProductPage;
