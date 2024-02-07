import AddToCart from "./addToCart";
import Price from "./price";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

type Item = {
  id: number;
  price: number;
  description: string;
  rating: number[];
  name: string;
  displayImage: string;
  category: string;
  thumbnail: string;
  brand: string;
  discountPercentage: number;
  subtitle: string;
  specialPrice: number;
  ribbon: string;
  slug: string;
};

export default function Product({ data }: { data: [] }) {
  return (
    <div className="bg-white flex-1 ">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product: Item) => (
            <Link
              href={`/p/${product.slug}`}
              key={product.id}
              className="group relative"
            >
              {product.ribbon && (
                <div className="absolute bg-gray-600 text-white top-2 px-2.5 text-sm rounded-r">
                  {product.ribbon}
                </div>
              )}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                <img
                  src={product.displayImage}
                  alt="image"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col gap-[3px] ">
                <p className="text-bold text-sm"> {product.name}</p>
                <p className="text-semibold text-gray-400 text-sm">
                  {product.subtitle.length > 30
                    ? `${product.subtitle.substring(0, 32)}...`
                    : product.subtitle}
                </p>
                <div className="flex justify-between items-center mt-1">
                  <Price
                    price={product.price}
                    specialPrice={product.specialPrice}
                  />
                  <AddToCart />
                </div>

                {/* <p className="text-sm font-medium text-gray-900">
                  &#x20B9; {product.price}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
