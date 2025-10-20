"use client";
import ChatBox from "./components/ChatBox";
import { useEffect, useState } from "react";

export default function HomePage() {
  // Número aleatório de pessoas esperando
  const [showJoin, setShowJoin] = useState(false);
  const [joinCount] = useState(() => Math.floor(100 + Math.random() * 900));

  useEffect(() => {
    const timer = setTimeout(() => setShowJoin(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Header fixo no topo, layout refinado */}
      <header className="fixed top-0 left-0 w-full z-40 flex flex-row items-start justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 select-none pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/globe.svg" alt="MM Icon" className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="text-white font-semibold text-sm sm:text-base tracking-wide">MASSEURMATCH</span>
          <span className="text-gray-400 text-xs uppercase ml-1 sm:ml-2">Coming Soon</span>
        </div>
      </header>

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 pb-32 sm:pb-40">
  <div className="flex flex-col items-center justify-center flex-1 w-full">
          {/* Slogan LGBTQ+ centralizado e animado */}
          <div className="w-full flex flex-col items-center justify-center mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-white/80 mb-2">THE MOST INTELLIGENT</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-[linear-gradient(90deg,#009fff_0%,#00e5ff_20%,#ff61a6_50%,#ffad00_80%,#ff004c_100%)] bg-clip-text text-transparent [background-size:200%_100%] animate-rainbow-swap text-center drop-shadow leading-tight">
              <span className="block">LGBTQ+</span>
              <span className="block">MASSAGE DIRECTORY</span>
            </span>
          </div>
          {/* Texto informativo centralizado acima do ChatBox, discreto */}
          <div className="w-full flex flex-col items-center justify-center mb-6 sm:mb-8">
            <div className="text-center max-w-2xl px-3 sm:px-2">
              <p className="text-gray-500 text-xs sm:text-sm font-sans leading-snug mb-1">
                We're working hard to bring you an incredible experience.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm font-sans leading-snug mb-1">
                Stay tuned for our launch and be the first to know when we go live! In the meantime, use our Knotty to sign up for news and launch.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm font-semibold italic tracking-wide mt-2">
                He’s 100% live. 100% Human. 100% MasseurMatch.
              </p>
            </div>
          </div>
          {/* Espaço extra entre textos e caixa (proporcional à nova altura da caixa) */}
          <div className="h-[24rem] sm:h-[30rem] md:h-[36rem]" />
          {/* Texto fake de espera animado acima do ChatBox */}
          {showJoin && (
            <div
              className="fixed bottom-[calc(12.6vh+6rem)] left-0 w-full flex justify-center z-50 pointer-events-none animate-fadeSlideUp"
              id="join-waiting"
            >
              <div className="bg-black/70 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base md:text-lg font-semibold text-gray-300 shadow-lg font-sans">
                {`Join ${joinCount} others waiting for launch`}
              </div>
            </div>
          )}
        </div>

        {/* ChatBox fixo no rodapé */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center pb-2 sm:pb-4 md:pb-8 z-50">
          <div className="w-full max-w-5xl h-auto sm:h-[12.6vh] min-h-[120px] flex items-end px-2 sm:px-4">
            <ChatBox />
          </div>
        </div>
    </main>

      {/* Slogan removido do canto inferior direito, agora está no header */}

      {/* Animação global removida para evitar erro de styled-jsx aninhado. Mover para o layout ou para o arquivo CSS global. */}
    </div>
  );
}
