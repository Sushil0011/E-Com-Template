import Products from "../components/products";
import { getData } from "@/utils/getData";
const page = async ({ params }: { params: { category: string } }) => {

  const categoryData: any = await getData(
    `https://fakestoreapi.com/products/category/${params.category}`
  );

  return (
    <div className="max-w-7xl mx-auto  flex items-center gap-10 justify-center p-24 min-h-screen">
      <Products
        data={categoryData as any}
        category={params.category as string}
      />
    </div>
  );
};

export default page;
