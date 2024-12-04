type CartSummaryProps = {
  total: number;
  onCheckout: () => void;
};

const CartSummary = ({ total, onCheckout }: CartSummaryProps) => (
  <div className="mt-8 border-t pt-4">
    <div className="flex justify-between items-center text-xl font-bold">
      <span>Total:</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <button
      onClick={onCheckout}
      className="w-full mt-4 bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors"
    >
      Proceed to Checkout
    </button>
  </div>
);

export default CartSummary;
