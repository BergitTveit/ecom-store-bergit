import React from "react";
import { ICartItem } from "../../types/cart.types";
import { QuantityControls } from "../UI/QuantityControls";

type CartItemProps = {
  item: ICartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export const CartItem = ({
  item: { product, quantity },
  onQuantityChange,
  onRemove,
}: CartItemProps) => (
  <div className="flex items-center justify-between border-b pb-4">
    <div className="flex items-center space-x-4">
      <img
        src={product.image.url}
        alt={product.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div>
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-gray-600">${product.discountedPrice}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <QuantityControls
        quantity={quantity}
        onQuantityChange={(newQuantity) =>
          onQuantityChange(product.id, newQuantity)
        }
      />
      <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700 transition-colors"
      >
        Remove
        {/* Consider Move to Productaction file or cartaction file.  */}
      </button>
    </div>
  </div>
);
