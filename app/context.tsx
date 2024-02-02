"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

// Define the shape of your context data
interface MyContextProps {
  cartItems: any[];
  exampleValue: string;
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
}

// Create the context
export const MyContext = createContext<MyContextProps | undefined>(undefined);
// Create a provider component that will wrap your app
interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  // You can initialize your context data here
  const exampleValue = "Hello, TypeScript!";
  const [cartItems, setCartItems] = useState<string[]>([]);

  return (
    <MyContext.Provider value={{ exampleValue, cartItems, setCartItems }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to easily access the context in your components
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
