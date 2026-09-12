"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type SpaceTimeFabricProps = React.ComponentProps<"div"> & {
  /** Show only on dark mode, or force always on. */
  mode?: "auto" | "always"
}

/**
 * 70s-inspired space-time fabric background.
 *
 * - Three stacked layers of slowly drifting, warped grids + radial ripples +
 *   vintage constellation dots, composed with blend modes to evoke a
 *   1970s science paperback cover.
 * - All motion is driven by CSS keyframes with long durations (18s / 30s / 60s)
 *   so the movement is "mild" and non-distracting.
 * - Tinted amber / burnt orange / deep purple matches the `#e3b50f` site accent
 *   (neuralmanacle brand) + a cosmic indigo glow for depth.
 * - Works across breakpoints: sizes scale with `cubic-bezier` parallax drift so
 *   content above (z ≥ 1) is always legible.
 * - Respects `prefers-reduced-motion` via globals.css (all transitions are
 *   reduced there globally; we additionally freeze position for the keyframes
 *   via the @media block below).
 */
export default function SpaceTimeFabric({
  mode = "auto",
  className,
  style,
  ...rest
}: SpaceTimeFabricProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-[-1] overflow-hidden",
        mode === "auto"
          ? "opacity-0 dark:opacity-100"
          : "opacity-100",
        "transition-opacity duration-700",
        className,
      )}
      style={style}
      {...rest}
    >
      <style>{`
        @keyframes stf-slow-pan-a {
          0%   { transform: translate3d(0, 0, 0) scale(1.05); }
          50%  { transform: translate3d(-2%, 1.2%, 0) scale(1.12); }
          100% { transform: translate3d(0, 0, 0) scale(1.05); }
        }
        @keyframes stf-slow-pan-b {
          0%   { transform: translate3d(0, 0, 0) scale(1.1); }
          50%  { transform: translate3d(2.5%, -1.8%, 0) scale(1.2); }
          100% { transform: translate3d(0, 0, 0) scale(1.1); }
        }
        @keyframes stf-ripple-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(1.08); }
        }
        @keyframes stf-dots-drift {
          0%   { background-position: 0% 0%, 45% 55%, 100% 100%; }
          50%  { background-position: 3% 4%, 48% 52%, 97% 96%; }
          100% { background-position: 0% 0%, 45% 55%, 100% 100%; }
        }
        @keyframes stf-film-grain {
          0%, 100% { opacity: 0.05; }
          50%      { opacity: 0.1;  }
        }

        @media (prefers-reduced-motion: reduce) {
          .stf-layer-a, .stf-layer-b, .stf-ripples,
          .stf-dots, .stf-grain { animation: none !important; }
        }
      `}</style>

      {/* Base 70s cosmic wash: deep plum → burnt amber → black vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 10%, #2a1245 0%, #12061f 42%, #07020c 70%, #000 100%)," +
            "radial-gradient(90% 60% at 12% 90%, rgba(227,181,15,0.10) 0%, transparent 60%)," +
            "radial-gradient(90% 60% at 92% 15%, rgba(227,99,45,0.09) 0%, transparent 60%)",
        }}
      />

      {/* Layer A: perspective-warped 70s wireframe grid (amber lines) */}
      <div
        className="stf-layer-a absolute -left-[10%] -right-[10%] -top-[20%] h-[140%] w-[120%]"
        style={{
          animation: "stf-slow-pan-a 60s ease-in-out infinite",
          maskImage:
            "radial-gradient(ellipse 100% 70% at 50% 55%, black 40%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 70% at 50% 55%, black 40%, transparent 82%)",
          transformOrigin: "50% 80%",
          background:
            "linear-gradient(transparent 0 49.5%, rgba(227,181,15,0.22) 49.5% 50.5%, transparent 50.5% 100%) 0 0 / 44px 44px,\n" +
            "linear-gradient(90deg, transparent 0 49.5%, rgba(227,181,15,0.18) 49.5% 50.5%, transparent 50.5% 100%) 0 0 / 44px 44px",
          mixBlendMode: "screen",
          perspective: "600px",
          rotate: "x 62deg",
          transform: "translateY(18%) scale(1.1)",
        }}
      />

      {/* Layer B: second grid, counter-rotating, finer spacing, cosmic purple */}
      <div
        className="stf-layer-b absolute -left-[15%] -right-[15%] -top-[10%] h-[130%] w-[130%]"
        style={{
          animation: "stf-slow-pan-b 36s ease-in-out infinite",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 55%, black 45%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 60% at 50% 55%, black 45%, transparent 85%)",
          transformOrigin: "50% 20%",
          background:
            "linear-gradient(transparent 0 49.5%, rgba(135,92,255,0.14) 49.5% 50.5%, transparent 50.5% 100%) 0 0 / 30px 30px,\n" +
            "linear-gradient(90deg, transparent 0 49.5%, rgba(135,92,255,0.12) 49.5% 50.5%, transparent 50.5% 100%) 0 0 / 30px 30px",
          mixBlendMode: "screen",
          rotate: "x -58deg",
          transform: "translateY(-12%) scale(1.08)",
        }}
      />

      {/* Ripple / gravity-well rings */}
      <div
        className="stf-ripples absolute inset-0"
        style={{
          animation: "stf-ripple-pulse 18s ease-in-out infinite",
          background:
            "repeating-radial-gradient(circle at 70% 35%, transparent 0 28px, rgba(227,181,15,0.06) 28px 29px, transparent 29px 58px),\n" +
            "repeating-radial-gradient(circle at 22% 78%, transparent 0 22px, rgba(135,92,255,0.05) 22px 23px, transparent 23px 44px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Constellation / vintage pin-prick stars, drifting very slowly */}
      <div
        className="stf-dots absolute inset-0"
        style={{
          animation: "stf-dots-drift 120s linear infinite",
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,236,180,0.9) 50%, transparent 51%),\n" +
            "radial-gradient(1px 1px at 65% 72%, rgba(255,210,140,0.75) 50%, transparent 51%),\n" +
            "radial-gradient(1.5px 1.5px at 80% 22%, rgba(227,181,15,0.85) 50%, transparent 51%),\n" +
            "radial-gradient(1px 1px at 10% 80%, rgba(180,150,255,0.8) 50%, transparent 51%),\n" +
            "radial-gradient(1px 1px at 40% 50%, rgba(255,255,255,0.55) 50%, transparent 51%),\n" +
            "radial-gradient(1px 1px at 88% 88%, rgba(255,220,170,0.7) 50%, transparent 51%),\n" +
            "radial-gradient(1.5px 1.5px at 50% 15%, rgba(227,181,15,0.75) 50%, transparent 51%),\n" +
            "radial-gradient(1px 1px at 30% 92%, rgba(170,140,255,0.75) 50%, transparent 51%)",
          backgroundSize: "600px 600px, 480px 480px, 700px 700px, 520px 520px, 420px 420px, 640px 640px, 560px 560px, 500px 500px",
          mixBlendMode: "screen",
        }}
      />

      {/* Subtle 16mm film grain + scanlines for that 70s paperback feel */}
      <div
        className="stf-grain absolute inset-0"
        style={{
          animation: "stf-film-grain 2.4s steps(2) infinite",
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px),\n" +
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.2px) 0 0 / 4px 4px",
          mixBlendMode: "overlay",
          opacity: 0.4,
        }}
      />

      {/* Vignette: keep corners black, content pops */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 50% 40%, transparent 55%, rgba(0,0,0,0.55) 85%, #000 100%)",
        }}
      />
    </div>
  )
}
