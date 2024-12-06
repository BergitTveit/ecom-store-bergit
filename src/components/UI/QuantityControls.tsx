type QuantityControlsProps = {
    quantity: number;
    onQuantityChange: (quantity: number) => void;
  };
  
  export const QuantityControls = ({ quantity, onQuantityChange }: QuantityControlsProps) => (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onQuantityChange(quantity - 1)}
        className="px-2 py-1 border rounded hover:bg-gray-100 transition-colors"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => onQuantityChange(quantity + 1)}
        className="px-2 py-1 border rounded hover:bg-gray-100 transition-colors"
      >
        +
      </button>
    </div>
  );

