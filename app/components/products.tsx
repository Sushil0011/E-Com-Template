"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { addItemsToCart } from "@/utils/helper";

type Item = {
  id: number;
  price: number;
  description: string;
  rating: number[];
  title: string;
  image: string;
  category: string;
  thumbnail: string;
  brand: string;
  discountPercentage: number;
};

const Products = ({ data, category }: { data: []; category: string }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  place-content-center place-items-center gap-20 w-full text-black  ">
      {data?.map((item: Item) => (
        <Link
          href={
            category
              ? `/${category}/${item?.id}`
              : `/${item?.category}/${item?.id}`
          }
          key={item.id}
          className="block md:w-[250px] w-[300px] "
        >
          <img
            src={item?.thumbnail}
            alt="image"
            className="h-[250px] w-full object-fill"
          />
          <div className=" mt-2">
            <p>{item?.title}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg  font-semibold">${item?.price}</span>
                <span className="text-green-500 ml-3 text-[12px] font-medium">
                  ({item?.discountPercentage}% OFF)
                </span>
              </div>
              <ShoppingBagIcon
                className="h-8 w-8 flex-shrink-0 text-gray-400 cursor-pointer"
                aria-hidden="true"
                type="button"
                onClick={(e) => addItemsToCart(e, 1, item.id)}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
