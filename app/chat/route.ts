

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key não configurada." }, { status: 500 });
    }
  const model = "gemini-pro-latest";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const body = {
      contents: [{ role: "user", parts: [{ text: message }]}],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    };
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      let errorDetail = "";
      try {
        const error = await response.json();
        errorDetail = JSON.stringify(error);
      } catch (e) {
        errorDetail = await response.text();
      }
      return NextResponse.json({ error: `API error: ${errorDetail}` }, { status: response.status });
    }
    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return NextResponse.json({ text });
  } catch (err) {
    return NextResponse.json({ error: String(err) || "Erro desconhecido." }, { status: 500 });
  }
}