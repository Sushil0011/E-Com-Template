"use client";
import axios from "axios";
import toast from "react-hot-toast";
const AddToCartButton = ({ item }: { item: {} }) => {
  const addItemsToCart = async (e: any) => {
    e.preventDefault();
    const localItemsString = localStorage.getItem("cartItems");
    const localItems = localItemsString ? JSON.parse(localItemsString) : [];
    localItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(localItems));
    toast.success("Item added to cart");

    // try {
    //   await axios.post("https://fakestoreapi.com/carts", item);
    //   toast.success("Item added to cart");
    // } catch (error) {
    //   toast.error("Failed to add Item in cart");
    // }
  };
  return (
    <button
      onClick={(e) => addItemsToCart(e)}
      className="border border-gray-400 py-2 px-4 rounded"
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
