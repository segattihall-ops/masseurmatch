type Props = {
  videoId?: string;
  darken?: number; // 0-1 overlay de escurecimento
};

export default function YouTubeBackground({
  videoId = "MSUqiFhFvGs",
  darken = 0.6,
}: Props) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: videoId, // necessário para loop funcionar
    modestbranding: "1",
    rel: "0",
    showinfo: "0",
    iv_load_policy: "3",
    playsinline: "1",
  }).toString();

  const src = `https://www.youtube.com/embed/${videoId}?${params}`;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-black">
      {/* Fallback para usuários com motion-reduce: esconde o vídeo */}
      <div className="hidden motion-reduce:block absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" aria-hidden="true" />

      {/* Iframe centralizado e cobrindo a tela mantendo 16:9 */}
      <iframe
        className="motion-reduce:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw]"
        src={src}
        title="Background Video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        aria-hidden="true"
      />

      {/* Overlay para legibilidade e um leve gradiente no topo */}
      <div className="absolute inset-0 [background:radial-gradient(1200px_400px_at_50%_0%,rgba(0,0,0,0.65),rgba(0,0,0,0))]" />
      {/* Escurecimento padrão controlado por prop (3 níveis simples para evitar style inline) */}
      <div
        className={
          `absolute inset-0 ${
            darken >= 0.75 ? 'bg-black/80' : darken >= 0.5 ? 'bg-black/60' : 'bg-black/40'
          }`
        }
      />
    </div>
  );
}
