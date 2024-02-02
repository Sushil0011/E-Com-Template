import toast from "react-hot-toast";
export const addItemsToCart = async (e: any, quantity: number, id: number) => {
  e.preventDefault();
  try {
    const res = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: id,
            quantity: quantity,
          },
        ],
      }),
    });
    toast.success("Item added to cart");
  } catch (error) {
    console.log(error);
  }
};
