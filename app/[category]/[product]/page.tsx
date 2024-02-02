import AddToCartButton from "@/app/components/Cart/AddToCartButton";
import { addItemsToCart } from "@/utils/helper";
const page = async ({ params }: { params: { product: string } }) => {
  async function getData() {
    const res = await fetch(`https://dummyjson.com/products/${params.product}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const data = await getData();
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto  flex items-center gap-10 justify-center  min-h-screen">
      <div className="block">
        <img src={data?.thumbnail} alt="image" />
        <div className="flex gap-5 mt-5 justify-between">
          {data?.images?.map((url: string) => (
            <img src={url} alt="image" className="h-[100px] w-[100px]" />
          ))}
        </div>
      </div>
      <div className="lg:max-w-[800px] text-gray-600  font-bold space-y-5">
        <p>{data?.title}</p>
        <p>{data?.brand}</p>
        <div className="flex items-center">
          <span className="block">${data?.price}</span>
          <span className="text-green-500 ml-3 text-[12px] font-medium">
            ({data?.discountPercentage}% OFF)
          </span>
        </div>
        <AddToCartButton quantity={1} id={data.id} />

        <p
          className="font-medium
        "
        >
          {" "}
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default page;
