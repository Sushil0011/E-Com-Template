"use client";
import { useMyContext } from "@/app/context";
const CartProducts = ({ cartData }: { cartData: any }) => {
  console.log(cartData);
  const { exampleValue } = useMyContext();
  console.log(exampleValue);
  return (
    <div className="flex-1">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 ">
          {cartData?.carts[0]?.products?.map((item: any) => {
            return (
              <div className=" relative flex  gap-20 border border-gray-400 p-3 rounded lg:w-[500px] ">
                <img
                  src={
                    "https://cdn.dummyjson.com/product-images/6/thumbnail.png"
                  }
                  alt="product_image"
                  className="h-[80px] w-[80px]"
                />
                <div className="flex justify-center flex-col">
                  <p className="text-lg font-medium">Product title</p>
                  <span className="text-lg font-medium">$100</span>
                  <span className="text-sm font-medium">Quantity - 1</span>
                </div>
                {/* <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4"
                  >
                    Remove
                  </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
