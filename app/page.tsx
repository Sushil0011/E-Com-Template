import Image from "next/image";
import Products from "./components/products";

async function getData() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: any = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-red-500">
      <Products data={data as any} />
    </main>
  );
}
