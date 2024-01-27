import Image from "next/image";
import Products from "./components/products";
import { getData } from "@/utils/getData";

export default async function Home() {
  const data: any = await getData("https://api.escuelajs.co/api/v1/products");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-red-500">
      <Products data={data as any} />
    </main>
  );
}
