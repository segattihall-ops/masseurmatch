"use client";

import { motion } from "framer-motion";

export default function BackgroundSmoke() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Smoke layers */}
      <motion.div
        className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)] blur-3xl animate-smoke-move"
        style={{ animationDuration: "30s" }}
      />
      <motion.div
        className="absolute w-[130%] h-[130%] top-[-15%] left-[-15%] bg-[radial-gradient(ellipse_at_center,rgba(33,243,101,0.1)_0%,rgba(0,0,0,0)_70%)] blur-2xl animate-smoke-move-rev"
        style={{ animationDuration: "35s" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"
      />
    </div>
  );
}
