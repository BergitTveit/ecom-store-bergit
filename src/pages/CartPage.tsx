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
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <section className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </section>
      <CartSummary total={total} />
    </main>
  );
};

export default CartPage;
