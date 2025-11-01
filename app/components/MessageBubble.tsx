export const MessageBubble = ({
  text,
  from
}: {
  text: string;
  from: "bot" | "user";
}) => {
  const isBot = from === "bot";

  return (
    <div
      className={`w-fit max-w-[85%] sm:max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed flex flex-col
        ${isBot
          ? "bg-white/10 text-white items-start self-start rounded-bl-none"
          : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white items-end self-end rounded-br-none justify-end ml-auto"}
      `}
      role="article"
      aria-label={isBot ? "Knotty says" : "You said"}
    >
      {/* Screen reader context */}
      <span className="sr-only">{isBot ? "Knotty: " : "You: "}</span>

      {/* Message content */}
      <span className="whitespace-pre-wrap break-words">
        {text}
      </span>
    </div>
  );
};
