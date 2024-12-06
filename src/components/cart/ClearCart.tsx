import { useCartActions } from "../../hooks/useCartActions";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";

export const ClearCart = () => {
  const { continueShopping } = useCartActions();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
      <Button onClick={() => continueShopping(navigate)}>
        Continue Shopping
      </Button>
    </div>
  );
};
