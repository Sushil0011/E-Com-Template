"use client";
import Image from "next/image";
import Link from "next/link";

 type Item = {
   id: number;
   price: number;
   description: string;
   rating: number[];
   title: string;
   image: string;
 };

 const Products = ({ data, category }: { data: []; category: string }) => {
   const addItemsToCart = (item: {}, e: any) => {
     e.preventDefault();
     const localItemsString = localStorage.getItem("cartItems");
     const localItems = localItemsString ? JSON.parse(localItemsString) : [];
     localItems.push(item);
     localStorage.setItem("cartItems", JSON.stringify(localItems));
   };

   return (
     <div className="grid grid-cols-4 gap-x-8 gap-y-10 w-full  text-black ">
       {data?.map((item: Item) => (
         <Link
           href={`/${category}/${item?.id}`}
           key={item.id}
           className="block w-[250px]"
         >
           <img
             src={item?.image}
             alt="image"
             className="h-[250px] w-[250px] object-fill"
           />
           <div className="flex justify-between items-center mt-2">
             <span>${item?.price}</span>
             <button onClick={(e) => addItemsToCart(item, e)}>
               Add to cart
             </button>
           </div>
           <p>{item?.title}</p>
         </Link>
       ))}
     </div>
   );
 };

export default Products;
