"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageBubble } from "./MessageBubble";

type Sender = "bot" | "user";

type Message = {
  id: string;
  from: Sender;
  text: string;
};

const INITIAL_GREETING: Message = {
  id: "intro",
  from: "bot",
  text: "Hey there! I'm Knotty — your AI host at MasseurMatch.",
};

const generateId = () => Math.random().toString(36).slice(2, 10);
const FALLBACK_REPLY = "I'm having trouble responding right now, but I'm here for you.";
const CONNECTION_ERROR_MESSAGE = "Connection issue — please try again soon.";

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const activeBotMessageRef = useRef<{ id: string; text: string } | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
      activeBotMessageRef.current = null;
    };
  }, []);

  const typeBotReply = useCallback((text: string) => {
    const botMessageId = generateId();
    let index = 0;

    const previousActive = activeBotMessageRef.current;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    if (previousActive) {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === previousActive.id ? { ...message, text: previousActive.text } : message
        )
      );
    }

    activeBotMessageRef.current = { id: botMessageId, text };

    setMessages((prev) => [...prev, { id: botMessageId, from: "bot", text: "" }]);

    typingIntervalRef.current = setInterval(() => {
      index += 1;
      setMessages((prev) =>
        prev.map((message) =>
          message.id === botMessageId
            ? { ...message, text: text.slice(0, index) }
            : message
        )
      );

      if (index >= text.length) {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
        activeBotMessageRef.current = null;
      }
    }, 25);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const trimmed = input.trim();
      if (!accepted || !trimmed) {
        return;
      }

      const userMessage: Message = {
        id: generateId(),
        from: "user",
        text: trimmed,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed }),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: { reply?: string; error?: string } = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        const reply = (data.reply ?? FALLBACK_REPLY).trim();
        typeBotReply(reply.length > 0 ? reply : FALLBACK_REPLY);
      } catch (error) {
        console.error("Chat submit error", error);
        typeBotReply(CONNECTION_ERROR_MESSAGE);
      } finally {
        setIsSubmitting(false);
      }
    },
    [accepted, input, typeBotReply]
  );

  const isSubmitDisabled = useMemo(() => {
    return !accepted || !input.trim() || isSubmitting;
  }, [accepted, input, isSubmitting]);

  return (
    <div
      className="w-full max-w-5xl h-full min-h-[240px] md:min-h-[420px] md:h-[60vh] bg-black/40 border border-white/10 backdrop-blur-2xl rounded-2xl md:rounded-[2.5rem] shadow-[0_0_40px_6px_rgba(0,0,0,0.7)] flex flex-col justify-between p-3 sm:p-4 md:p-8 text-white transition-all duration-500 hover:shadow-[0_0_80px_20px_rgba(0,0,0,0.85)] mx-auto"
      aria-label="Knotty chat"
    >
      <div
        className="flex-1 overflow-y-auto space-y-2 mb-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        aria-live="polite"
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} text={message.text} from={message.from} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
        <label htmlFor="chat-input" className="sr-only">
          Enter your message for Knotty
        </label>
        <input
          id="chat-input"
          type="text"
          placeholder="Ask Knotty anything about MasseurMatch"
          aria-label="Enter your message for Knotty"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="w-full bg-[#0a0a0a]/70 border border-white/10 rounded-full px-4 py-2 sm:px-5 sm:py-3 text-white placeholder-gray-500 focus:ring-1 focus:ring-white outline-none transition text-sm sm:text-base"
          disabled={isSubmitting}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <input
              id="accept-terms"
              type="checkbox"
              checked={accepted}
              onChange={(event) => setAccepted(event.target.checked)}
              className="w-4 h-4 rounded border-gray-500 bg-gray-800 min-w-4 min-h-4"
            />
            <label htmlFor="accept-terms" className="cursor-pointer">
              I agree to
              {" "}
              <Link href="/terms" className="text-white hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              isSubmitDisabled
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-300"
            }`}
          >
            {isSubmitting ? "Sending…" : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
