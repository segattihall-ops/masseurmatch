export const MessageBubble = ({
  text,
  from
}: {
  text: string;
  from: "bot" | "user";
}) => (
  <div
    className={`w-fit max-w-[85%] sm:max-w-[80%] px-4 py-3 sm:py-2 rounded-2xl text-sm sm:text-base leading-relaxed flex flex-col
      ${from === "bot"
        ? "bg-white/10 text-white items-start self-start rounded-bl-none"
        : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white items-end self-end rounded-br-none justify-end ml-auto"}
    `}
  >
    {text}
  </div>
);
