import Products from "../components/products";
import { getData } from "@/utils/getData";
const page = async ({ params }: { params: { category: string } }) => {
  const data = await getData(`https://api.escuelajs.co/api/v1/categories/1`);
  console.log(data);

  return (
    <div className="max-w-7xl mx-auto  flex items-center gap-10 justify-center  min-h-screen">
      {params.category} Data
    </div>
  );
};

export default page;
