"use client";
import { motion } from "framer-motion";

export default function GlowLogo() {
  return (
    <motion.header
      className="absolute top-6 left-8 flex items-center gap-3 select-none"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/favicon.ico"
        alt="MasseurMatch Logo"
        className="w-10 h-10"
        animate={{
          filter: [
            "drop-shadow(0 0 10px rgba(255,255,255,0.4))",
            "drop-shadow(0 0 25px rgba(255,255,255,0.9))",
            "drop-shadow(0 0 10px rgba(255,255,255,0.4))",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div>
        <h1 className="text-white font-semibold text-lg tracking-wide">
          MASSEURMATCH
        </h1>
        <p className="text-gray-400 text-xs uppercase">Coming Soon</p>
      </div>
    </motion.header>
  );
}
