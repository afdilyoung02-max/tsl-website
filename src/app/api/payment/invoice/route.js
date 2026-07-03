import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { discordUsername, amount } = await req.json();

    const serverKey = process.env.MIDTRANS_SERVER_KEY;

    if (!serverKey) {
      return NextResponse.json(
        { message: "Server key missing" },
        { status: 500 }
      );
    }

    const auth = Buffer.from(serverKey + ":").toString("base64");

    const payload = {
      transaction_details: {
        order_id: "ORDER-" + Date.now(),
        gross_amount: Number(amount),
      },
      customer_details: {
        first_name: discordUsername,
      },
    };

    const response = await fetch(
      "https://app.midtrans.com/snap/v2/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    console.log("MIDTRANS RAW RESPONSE:", JSON.stringify(data, null, 2));

    if (!data.token) {
      return NextResponse.json(
        {
          message: "Snap token gagal dibuat",
          debug: data,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      snapToken: data.token,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}