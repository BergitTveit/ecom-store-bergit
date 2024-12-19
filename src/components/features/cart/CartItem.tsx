import React from "react";
import { ICartItem } from "./cart.types";
import { QuantityControls } from "../../UI/QuantityControls";
import { useCartActions } from "../../../hooks/useCartActions";
import { Button } from "../../UI/Button";

type CartItemProps = {
  item: ICartItem;
};

export const CartItem = ({ item: { product, quantity } }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCartActions();

  return (
    <article className="flex items-center justify-between pb-4 [&:not(:last-child)]:border-b">
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
            updateQuantity(product.id, newQuantity)
          }
        />
        <Button onClick={() => removeItem(product.id)} variant="danger">
          Remove
        </Button>
      </div>
    </article>
  );
};
