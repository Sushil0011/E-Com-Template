"use client";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./addToCartButton";

type Item = {
  id: number;
  price: number;
  description: string;
  rating: number[];
  title: string;
  image: string;
  category: string;
};

const Products = ({ data, category }: { data: []; category: string }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-10 w-full  text-black ">
      {data?.map((item: Item) => (
        <Link
          href={
            category
              ? `/${category}/${item?.id}`
              : `/${item?.category}/${item?.id}`
          }
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
            <AddToCartButton item={item as object} />
          </div>
          <p>{item?.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;
