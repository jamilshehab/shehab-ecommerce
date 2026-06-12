import { serverClient } from "@/app/lib/createOrder";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, phone, address, items, total } = body;

    // 🚨 basic validation
    if (!fullName || !phone || !address) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!items || !items.length) {
      return Response.json(
        { success: false, error: "Cart is empty" },
        { status: 400 },
      );
    }

    // ✅ sanitize items
    const cleanItems = items.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image: item.image || "",
    }));

    // 1️⃣ Create order in Sanity
    const order = await serverClient.create({
      _type: "order",
      fullName,
      phone,
      address,
      items: cleanItems,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    });

    // 2️⃣ Update stock safely
    for (const item of cleanItems) {
      try {
        await serverClient
          .patch(item.id)
          .inc({ stock: -item.quantity }) // ✅ correct way to subtract
          .commit();
      } catch (err) {
        console.error(`Stock update failed for ${item.id}`, err);
      }
    }

    return Response.json(
      {
        success: true,
        orderId: order._id,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("ORDER API ERROR:", err);

    return Response.json(
      {
        success: false,
        error: "Internal server error while creating order",
      },
      { status: 500 },
    );
  }
}
