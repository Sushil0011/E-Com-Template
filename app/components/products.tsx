"use client";
import Image from "next/image";
import Link from "next/link";

const Products = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10 w-full  text-black ">
      {data?.map((item: any) => (
        <Link href={`/${item?.id}`} key={item.id} className="block">
          <img src={item?.images[0]} width={300} height={300} alt="image" />
          <div className="flex justify-between items-center mt-2">
            <span>${item?.price}</span>
            <button>Add to cart</button>
          </div>
          <p>{item?.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Products;
