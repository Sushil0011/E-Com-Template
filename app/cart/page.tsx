import { getData } from "@/utils/getData";
import CartProducts from "../components/Cart/CartProducts";
import Summary from "../components/Cart/Summary";
const page = async () => {
  const data: any = await getData("https://dummyjson.com/users/1/carts");
  console.log("cartData", data?.carts[0]?.products);
  return (
    <div className="flex justify-between  items-center max-w-7xl mx-auto py-24">
      <CartProducts cartData={data as any} />
      <Summary cartData={data as any} />
    </div>
  );
};

export default page;
