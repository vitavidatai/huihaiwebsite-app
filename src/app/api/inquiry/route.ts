
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { fullName, email, company, country, category, message } = data;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Huihai Website <inquiry@huihaiclean.com>",
        to: [toEmail],
        reply_to: email,
        subject: "New Website Inquiry",
        text: [
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Company: ${company || ""}`,
          `Country: ${country || ""}`,
          `Product: ${category || ""}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return NextResponse.json(
        { error: "Failed to send inquiry." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
