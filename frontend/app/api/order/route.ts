import { client } from "@/sanity/lib/client";

export async function createOrder(data: {
  fullName: string;
  phone: string;
  address: string;
  items: any[];
  total: number;
}) {
  const { fullName, phone, address, items, total } = data;

  await client.create({
    _type: "order",
    fullName,
    phone,
    address,
    items,
    total,
    createdAt: new Date().toISOString(),
  });
}
