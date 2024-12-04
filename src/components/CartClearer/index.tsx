type ClearCartProps = {
  onContinueShopping: () => void;
};

const ClearCart = ({ onContinueShopping }: ClearCartProps) => (
  <div className="container mx-auto p-4 text-center">
    <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
    <button
      onClick={onContinueShopping}
      className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors"
    >
      Continue Shopping
    </button>
    {/* Move buttons to actions?  */}
  </div>
);

export default ClearCart;
