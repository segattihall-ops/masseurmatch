"use client";
import { useEffect, useRef } from "react";

export default function StarFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Star config
    const numStars = 180;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
  r: Math.random() * 2.2 + 0.8,
  dx: (Math.random() - 0.5) * 0.2,
  dy: (Math.random() - 0.5) * 0.2,
  alpha: Math.random() * 0.3 + 0.7,
    }));

    const bgImg = new window.Image();
    bgImg.src = "/starfield.png";
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Desenha imagem de fundo
      ctx.globalAlpha = 1;
      ctx.drawImage(bgImg, 0, 0, width, height);
      // Desenha estrelas animadas
      for (const star of stars) {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;
        star.alpha += (Math.random() - 0.5) * 0.02;
        star.alpha = Math.max(0.3, Math.min(1, star.alpha));
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    bgImg.onload = animate;

    // Resize handler
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none block"
    />
  );
}
