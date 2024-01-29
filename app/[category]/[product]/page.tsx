const page = async ({ params }: { params: { product: string } }) => {
  async function getData() {
    const res = await fetch(
      `https://fakestoreapi.com/products/${params.product}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await getData();

  return (
    <div className="max-w-7xl mx-auto  flex items-center gap-10 justify-center  min-h-screen">
      <div className="block">
        <img src={data?.image} alt="image" />
        <div className="flex gap-5 mt-5 justify-between">
          {data?.images?.map((url: any) => (
            <img src={url} alt="image" className="h-[120px] w-[120px]" />
          ))}
        </div>
      </div>
      <div className="lg:max-w-[800px] text-gray-600  font-bold space-y-5">
        <p>{data?.title}</p>
        <span className="block">${data?.price}</span>
        <button className="border border-gray-600 px-5 py-2 rounded">
          ADD TO BAG
        </button>

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
