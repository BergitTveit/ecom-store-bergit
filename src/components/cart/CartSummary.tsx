import { useNavigate } from "react-router-dom";
import { useCartActions } from "../../hooks/useCartActions";
import { Button } from "../UI/Button";

type CartSummaryProps = {
  total: number;
};

export const CartSummary = ({ total }: CartSummaryProps) => {
  const { navigateToCheckout } = useCartActions();
  const navigate = useNavigate();

  return (
    <div className="mt-8 border-t pt-4">
      <div className="flex justify-between items-center text-xl font-bold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Button
        onClick={() => navigateToCheckout(navigate)}
        variant="primary"
        fullWidth
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};
