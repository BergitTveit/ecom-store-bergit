import { useEffect } from "react";
import { useCartActions } from "../../hooks/cart";
import { Button } from "../../components/UI/Button";

export const CheckoutSuccessPage = () => {
  const { clearCart, continueShopping } = useCartActions();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="container mx-auto p-4">
      <div className="max-w-md mx-auto mt-10 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center">
            <span className="text-white text-2xl">✓</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>

        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>

        <Button onClick={continueShopping} variant="primary">
          Return to Store
        </Button>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;
