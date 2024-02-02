import Image from "next/image";
import Products from "./components/products";
import { getData } from "@/utils/getData";

export default async function Home() {
  const data: any = await getData("https://dummyjson.com/products");
  return (
    <main className=" min-h-screen py-24 max-w-7xl mx-auto ">
      <Products data={data.products as any} category="" />
    </main>
  );
}
