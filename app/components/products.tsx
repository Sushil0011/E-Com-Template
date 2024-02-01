"use client";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./addToCartButton";
import { useState } from "react";

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
};

const Products = ({
  data,
  category,
}: {
  data: { products: Item[] };
  category: string;
}) => {
  const products = data?.products || [];
  console.log(products, "products");
  const [sortData, setSortData] = useState([]);

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-10 w-full  text-black ">
      {products.map((item: Item) => (
        <a
          href={
            category
              ? `/${category}/${item?.id}`
              : `/${item?.category}/${item?.id}`
          }
          key={item.id}
          className="block w-[250px]"
        >
          <p>{}</p>
          <img
            src={item?.thumbnail}
            alt="image"
            className="h-[250px] w-[250px] object-fill"
          />
          <div className="  mt-2">
            <p className="w-full ">{item.description}</p>
            <div className="flex justify-between ">
              <p>
                {item?.brand} {item?.title}
              </p>
              <p>{item?.category}</p>
            </div>
            <span>price:${item?.price}</span>
          </div>

          <p>rating:{item?.rating}</p>
          <AddToCartButton item={item as object} />
        </a>
      ))}
    </div>
  );
};

export default Products;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import AddToCartButton from "./addToCartButton";
// import { useState } from "react";
// import Sidebar from "./sidebar";

// type Item = {
//   id: number;
//   price: number;
//   description: string;
//   rating: number[];
//   title: string;
//   image: string;
//   category: string;
// };

// interface ProductsProps {
//   data: Item[];
//   category: string;
// }

// const Products: React.FC<ProductsProps> = ({ data, category }) => {
//   const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([]);
//   console.log(data);

//   const filterData = data?.filter((item) => {
//     const price = item?.price || 0;
//     return selectedPriceRanges.some(
//       (range) =>
//         (range === 0 && price <= 100) ||
//         (range === 1 && price > 100 && price <= 500) ||
//         (range === 2 && price > 500 && price <= 1000)
//     );
//   });

//   return (
//     <div className="flex ">
//       <div>
//         <Sidebar
//           selectedPriceRanges={selectedPriceRanges}
//           setSelectedPriceRanges={setSelectedPriceRanges}
//         />
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10 w-full   text-black ">
//         {selectedPriceRanges.length === 0
//           ? data.map((item: Item) => (
//               <a
//                 href={
//                   category
//                     ? `/${category}/${item?.id}`
//                     : `/${item?.category}/${item?.id}`
//                 }
//                 key={item.id}
//                 className="block w-[200px]"
//               >
//                 <img
//                   src={item?.image}
//                   alt="image"
//                   className="h-[200px] w-[200px] object-fill"
//                 />
//                 <div className="flex justify-between items-center mt-2">
//                   <span>${item?.price}</span>
//                   <AddToCartButton item={item as object} />
//                 </div>
//                 <p>{item?.title}</p>
//               </a>
//             ))
//           : filterData.map((item: Item) => (
//               <a
//                 href={
//                   category
//                     ? `/${category}/${item?.id}`
//                     : `/${item?.category}/${item?.id}`
//                 }
//                 key={item.id}
//                 className="block w-[200px]"
//               >
//                 <img
//                   src={item?.image}
//                   alt="image"
//                   className="h-[200px] w-[200px] object-fill"
//                 />
//                 <div className="flex justify-between items-center mt-2">
//                   <span>${item?.price}</span>
//                   <AddToCartButton item={item as object} />
//                 </div>
//                 <p>{item?.title}</p>
//               </a>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
