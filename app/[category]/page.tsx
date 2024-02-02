import ProductLayout from "../components/productLayout";
import { getData } from "@/utils/getData";
const page = async ({ params }: { params: { category: string } }) => {
  const categoryData: any = await getData(
    `https://api.tanntrim.com/static-categories/`
  );

  const currentCategoryData = categoryData.filter(
    (category: any) => category.slug === params.category
  );
  console.log(currentCategoryData);

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <ProductLayout
        data={currentCategoryData[0] as any}
        category={params.category as string}
      />
    </div>
  );
};

export default page;
