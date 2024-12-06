import { useCartActions } from "../../../hooks/useCartActions";
import { Button } from "../../UI/Button";

export const EmptyCartMessage = () => {
  const { continueShopping } = useCartActions();

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
      <Button onClick={continueShopping}>Continue Shopping</Button>
    </div>
  );
};
