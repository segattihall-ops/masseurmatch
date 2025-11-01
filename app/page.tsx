"use client";
import ChatBox from "./components/ChatBox";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showJoin, setShowJoin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowJoin(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Header fixo no topo */}
      <header className="fixed top-0 left-0 w-full z-40 flex flex-row items-start justify-between px-4 sm:px-8 pt-4 sm:pt-6 select-none pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          <img
            src="/globe.svg"
            alt="MasseurMatch Icon"
            className="w-6 h-6 sm:w-7 sm:h-7"
            width="28"
            height="28"
          />
          <span className="text-white font-semibold text-sm sm:text-base tracking-wide">
            MASSEURMATCH
          </span>
          <span className="text-gray-400 text-xs uppercase ml-1 sm:ml-2">
            Coming Soon
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 pb-32 sm:pb-40 pt-20 sm:pt-24" id="main-content">
        <div className="flex flex-col items-center justify-center flex-1 w-full space-y-6 sm:space-y-8">
          {/* Slogan LGBTQ+ */}
          <div className="w-full flex flex-col items-center justify-center text-center">
            <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-white/80 mb-2">
              THE MOST INTELLIGENT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-[linear-gradient(90deg,#009fff_0%,#00e5ff_20%,#ff61a6_50%,#ffad00_80%,#ff004c_100%)] bg-clip-text text-transparent [background-size:200%_100%] animate-rainbow-swap drop-shadow-lg">
              <span className="block">LGBTQ+</span>
              <span className="block">MASSAGE DIRECTORY</span>
            </h1>
          </div>

          {/* Texto informativo */}
          <div className="w-full flex flex-col items-center justify-center px-2 sm:px-4">
            <div className="text-center max-w-2xl space-y-2 sm:space-y-3">
              <p className="text-gray-400 text-xs sm:text-sm md:text-base font-sans leading-relaxed">
                We're working hard to bring you an incredible experience.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Stay tuned for our launch and be the first to know when we go live!
                In the meantime, chat with Knotty to learn more and sign up for updates.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-semibold italic tracking-wide mt-3 sm:mt-4">
                He's 100% live. 100% AI. 100% MasseurMatch.
              </p>
            </div>
          </div>

          {/* Espaço responsivo antes do chat */}
          <div className="h-8 sm:h-16 md:h-24" />

          {/* Animação de Join Waiting */}
          {showJoin && (
            <div
              className="fixed bottom-[calc(15vh+4rem)] sm:bottom-[calc(12.6vh+6rem)] left-0 w-full flex justify-center z-50 pointer-events-none animate-fadeSlideUp px-4"
              id="join-waiting"
              role="status"
              aria-live="polite"
            >
              <div className="bg-black/70 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base md:text-lg font-semibold text-gray-300 shadow-lg font-sans">
                Chat with Knotty to learn more about MasseurMatch
              </div>
            </div>
          )}
        </div>

        {/* ChatBox fixo no rodapé */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center pb-2 sm:pb-4 md:pb-8 z-50">
          <div className="w-full max-w-5xl h-auto flex items-end px-2 sm:px-4">
            <ChatBox />
          </div>
        </div>
      </main>
    </div>
  );
}
