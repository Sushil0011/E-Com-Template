import Image from "next/image";
import Products from "./components/products";
import { getData } from "@/utils/getData";

export default async function Home() {
  const data: any = await getData("https://dummyjson.com/products");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Products data={data as any} category="" />
    </main>
  );
}
