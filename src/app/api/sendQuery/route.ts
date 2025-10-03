import nodemailer from "nodemailer";

const requests: Record<string, { count: number; lastRequest: number }> = {};
const LIMIT = 3; 
const WINDOW = 60 * 1000;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, query, email } = body;

  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  if (!requests[ip]) {
    requests[ip] = { count: 1, lastRequest: now };
  } else {
    const timePassed = now - requests[ip].lastRequest;
    if (timePassed > WINDOW) {
      requests[ip] = { count: 1, lastRequest: now };
    } else {
      requests[ip].count++;
      if (requests[ip].count > LIMIT) {
        return new Response(
          JSON.stringify({ message: "Too many requests. Try again later." }),
          { status: 429 }
        );
      }
    }
  }

  // ---- Nodemailer Transporter ----
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, 
    },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: `"Unity Health India Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Query from Unity Health India Website",
      text: `Name: ${name}\nPhone: ${phone}\nQuery: ${query}`,
    });

    if (email) {
      await transporter.sendMail({
        from: `"Unity Health India" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "We have received your query",
        text: `Hi ${name},\n\nThanks for reaching out to Unity Health India. We have received your query and will respond shortly.\n\nRegards,\nUnity Health India Team`,
      });
    }

    return new Response(JSON.stringify({ message: "Query sent successfully" }), {
      status: 200,
    });
  } catch (err: any) {
    console.error("Nodemailer Error:", err);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: err.message }),
      { status: 500 }
    );
  }
}
