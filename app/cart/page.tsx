"use client";
import React, { useEffect, useState } from "react";
import { getData } from "@/utils/getData";
const page = () => {
  const [cartItems, setCartItems] = useState<Array>([]);
  const fetchCartItems = async () => {
    const data = await getData("https://fakestoreapi.com/carts");
    setCartItems(data);
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className=" max-w-7xl mx-auto  min-h-screen">
      <div className="grid place-content-center">
        Your Cart Data
        {cartItems?.map((item: any) => (
          <div>{item?.id}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
