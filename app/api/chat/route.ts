import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const apiKey = "AIzaSyC3qoX8mhLv1vq2_m9mwkEdEYUarFekPGE"; // api google key
    if (!apiKey) {
      // In development, return a friendly mock so dev flow works without secrets.
      if (process.env.NODE_ENV !== "production") {
        return NextResponse.json({
          reply:
            "[DEV MODE] Hi! OPENAI_API_KEY is not set, so I'm returning a local mock. Set the env var to talk to the real AI.",
        });
      }
      console.error("Missing OPENAI_API_KEY env var");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=" + apiKey, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are Knotty, the friendly AI host of MasseurMatch — the most intelligent LGBTQ+ massage directory. You answer clearly, kindly, and professionally.\n\nUser: ${message}`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    }),
  });

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini error:", err);
      return NextResponse.json({ error: "AI service error" }, { status: 502 });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here, but something went wrong!";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "Failed to connect to AI service." }, { status: 500 });
  }
}
