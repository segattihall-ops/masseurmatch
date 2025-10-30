"use client";
import { useState, useRef, useEffect } from "react";
import { MessageBubble } from "./MessageBubble";
import Link from "next/link";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hey there! I'm Knotty — your AI host at MasseurMatch.", from: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // efeito de digitação
  const typeMessage = (text: string) => {
    let i = 0;
    setIsTyping(true);
    const id = setInterval(() => {
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.from === "bot" && last.text.length < text.length) {
          const cp = [...prev];
          cp[cp.length - 1] = { ...last, text: text.slice(0, i + 1) };
          return cp;
        }
        return [...prev, { text: text.slice(0, i + 1), from: "bot" as const }];
      });
      i++;
      if (i >= text.length) {
        clearInterval(id);
        setIsTyping(false);
      }
    }, 25);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return alert("Please agree to Terms & Conditions first.");
    if (!input.trim()) return;

    const userMsg = { text: input, from: "user" as const };
    setMessages((p) => [...p, userMsg]);
    const payload = input;
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: payload }),
      });
      const data = await res.json();
      typeMessage(data.reply || "Hmm… could you try that again?");
    } catch {
      typeMessage("Connection issue — please try again soon.");
    }
  };

  return (
    <div
      className="
        w-full max-w-5xl h-full min-h-[220px] md:min-h-[420px] md:h-[60vh]
        bg-black/40 border border-white/10 backdrop-blur-2xl
        rounded-2xl md:rounded-[2.5rem] shadow-[0_0_40px_6px_rgba(0,0,0,0.7)]
        flex flex-col justify-between p-3 sm:p-4 md:p-8 text-white
        transition-all duration-500 hover:shadow-[0_0_80px_20px_rgba(0,0,0,0.85)]
        mx-auto
      "
      aria-label="Knotty chat"
    >
      <div className="flex-1 overflow-y-auto space-y-2 mb-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {messages.map((m, i) => (
          <MessageBubble key={i} text={m.text} from={m.from as "bot" | "user"} />
        ))}
        {isTyping && (
          <div className="flex items-center space-x-1 text-gray-400 text-sm pl-2">
            <span className="animate-pulse">Knotty is typing</span>
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

  <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
        <label htmlFor="chat-input" className="sr-only">Enter your email or message</label>
        <input
          id="chat-input"
          type="text"
          placeholder="type here lets chat"
          aria-label="Enter your email or message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-[#0a0a0a]/70 border border-white/10 rounded-full px-4 py-2 sm:px-5 sm:py-3 
          text-white placeholder-gray-500 focus:ring-1 focus:ring-white outline-none transition text-sm sm:text-base"
        />

  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <input
              id="accept-terms"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-4 h-4 rounded border-gray-500 bg-gray-800 min-w-4 min-h-4"
            />
            <label htmlFor="accept-terms">
              I agree to{" "}
              <Link href="/terms" className="text-white hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={!accepted || !input.trim()}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              accepted && input.trim()
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
