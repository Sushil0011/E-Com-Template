import ProductDetail from "./productDetail";

const page = async ({ params }: { params: { product: string } }) => {
  async function getData() {
    const res = await fetch(`https://api.tanntrim.com/static-products/`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const data = await getData();
  const product = data.find((product: any) => params.product === product.slug);
  console.log("product detail", product);
  return <ProductDetail product={product} />;
};

export default page;
