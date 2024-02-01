"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type CartItem = {
  id: number;
  price: number;
  description: string;
  rating: number[];
  title: string;
  image: string;
  quantity: number;
};

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    setCartItems(parsedCartItems);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const aggregateItems = (items: CartItem[]) => {
    const aggregatedItems = items.reduce((acc, item) => {
      const existingItem = acc.find((accItem) => accItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, [] as CartItem[]);

    return aggregatedItems;
  };

  const aggregatedCartItems = aggregateItems(cartItems);

  let total_price = 0;

  return (
    <div
      className={`max-w-7xl mx-auto  grid  ${
        aggregatedCartItems.length > 0 ? "grid-cols-2" : "place-content-center"
      }  gap-10 min-h-screen p-24`}
    >
      {aggregatedCartItems.length > 0 ? (
        <>
          <div className="flex flex-col gap-10 ">
            {aggregatedCartItems.map((item) => {
              total_price = total_price + item.price * item.quantity;
              return (
                <div
                  key={item.id}
                  className=" relative flex gap-5 border border-gray-400 p-5 rounded "
                >
                  <img
                    src={item.image}
                    alt="product_image"
                    className="h-[200px] w-[250px]"
                  />
                  <div className="flex justify-center flex-col">
                    <p className="text-xl font-medium">{item.title}</p>
                    <span className="text-xl font-medium">
                      ${item.price * item.quantity}
                    </span>
                    <div>
                      <span>Quantity: {item.quantity}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border border-gray-400 p-5 rounded">
            <p>PRICE DETAILS ({aggregatedCartItems.length} ITEMS)</p>
            <div>
              <div className="flex justify-between">
                <span>Total MRP</span>

                <span>{total_price}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>$1</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>$2</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-xl font-bold text-gray-500">
          There is no item in the cart.
        </p>
      )}
    </div>
  );
};

export default Page;
