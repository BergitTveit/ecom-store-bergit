import { useCart } from "../hooks/useCart";
import {
  CartItem,
  CartSummary,
  EmptyCartMessage,
} from "../components/features/cart";

const CartPage = () => {
  const { cartItems, total } = useCart();

  if (cartItems.length === 0) {
    return <EmptyCartMessage />;
  }

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <CartSummary total={total} />
    </section>
  );
};

export default CartPage;
