export async function getData(url: any) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
