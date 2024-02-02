"use client";
import { addItemsToCart } from "@/utils/helper";
const AddToCartButton = ({
  quantity,
  id,
}: {
  quantity: number;
  id: number;
}) => {
  return (
    <button
      className="border border-gray-400 rounded px-3 py-2"
      onClick={(e) => addItemsToCart(e, quantity, id)}
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
