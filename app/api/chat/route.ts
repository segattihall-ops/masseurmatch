import { NextResponse } from "next/server";

const GEMINI_MODEL = "models/gemini-1.5-flash";

async function callGemini(prompt: string, apiKey: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini request failed: ${response.status} ${errorBody}`);
  }

  const data = await response.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!reply) {
    throw new Error("Gemini response missing candidate text");
  }

  return reply;
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const userMessage = typeof message === "string" ? message.trim() : "";

    if (!userMessage) {
      return NextResponse.json(
        { error: "Please include a message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      if (process.env.NODE_ENV !== "production") {
        return NextResponse.json({
          reply:
            "[DEV MODE] Set GOOGLE_API_KEY in your environment to enable live responses.",
        });
      }

      console.error("Missing GOOGLE_API_KEY environment variable");
      return NextResponse.json(
        { error: "Service unavailable." },
        { status: 503 }
      );
    }

    const systemPrompt =
      "You are Knotty, the friendly AI host for MasseurMatch — the most intelligent LGBTQ+ massage directory. \n" +
      "Answer with warmth, professionalism, and inclusivity. Keep responses concise (3-4 sentences) and offer to help users learn more about the directory or join the waitlist when appropriate.";

    const reply = await callGemini(
      `${systemPrompt}\n\nUser: ${userMessage}`,
      apiKey
    );

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error", error);
    return NextResponse.json(
      { error: "Unable to reach the AI service right now." },
      { status: 500 }
    );
  }
}
