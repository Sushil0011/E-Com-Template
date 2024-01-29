"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const page = () => {
  const [cartItems, setCartItems] = useState([]);
  let total_price = 0;
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    setCartItems(parsedCartItems);
  }, []);

  const removeFromCart = (id: number) => {
    const filteredItems = cartItems.filter((item: any) => item?.id !== id);
    setCartItems(filteredItems);
    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
  };

  return (
    <div
      className={`max-w-7xl mx-auto  grid  ${
        cartItems.length > 0 ? "grid-cols-2" : "place-content-center"
      }  gap-10 min-h-screen p-24`}
    >
      {cartItems.length > 0 ? (
        <>
          <div className="flex flex-col gap-10 ">
            {cartItems?.map((item: any) => {
              total_price = total_price + item.price;
              return (
                <div className=" relative flex gap-5 border border-gray-400 p-5 rounded ">
                  <img
                    src={item.image}
                    alt="product_image"
                    className="h-[200px] w-[250px]"
                  />
                  <div className="flex justify-center flex-col">
                    <p className="text-xl font-medium">{item.title}</p>
                    <span className="text-xl font-medium">${item.price}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className="border border-gray-400 p-5 rounded">
            <p>PRICE DETAILS ({cartItems.length} ITEMS)</p>
            <div>
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>{total_price}</span>
              </div>
              <div className="flex justify-between">
                <span>Plateform Fee</span>
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
          The is no item in the cart .
        </p>
      )}
    </div>
  );
};

export default page;
