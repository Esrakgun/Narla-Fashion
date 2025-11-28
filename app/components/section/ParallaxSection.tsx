"use client";

import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ParallaxSectionProps } from "@/app/types";

const ParallaxSection: FC<ParallaxSectionProps> = ({
  image,
  heightClass = "min-h-[70vh]",
  className,
  overlay = 40,
  align = "center",
  title,
  subtitle,
  cta,
  contentClassName,
  children,
}) => {
  const safe = Math.max(0, Math.min(overlay, 100));

  return (
    <section
      className={clsx(
        "relative w-full flex items-center py-20 md:py-32",
        "bg-center bg-cover bg-fixed",
        align === "start" && "justify-start",
        align === "center" && "justify-center",
        align === "end" && "justify-end",
        heightClass,
        className
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0,0,0,${safe / 160}),
            rgba(0,0,0,${safe / 90})
          )`,
        }}
      />

      {/* CONTENT */}
      <div
        className={clsx(
          "relative z-10 w-full max-w-5xl px-6 animate-fadeIn",
          contentClassName,
          align === "start" && "text-left",
          align === "center" && "text-center",
          align === "end" && "text-right",
          "text-white"
        )}
      >
        {children ? (
          children
        ) : (
          <>
            {/* TITLE */}
            {title && (
              <h2 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6">
                {title}
              </h2>
            )}

            {/* SUBTITLE */}
            {subtitle && (
              <p className="text-xl md:text-2xl max-w-[60ch] mx-auto opacity-90 leading-relaxed mb-10">
                {subtitle}
              </p>
            )}

            {/* CTA BUTTON */}
            {cta && (
              <Link
                href={cta.href}
                target={cta.newTab ? "_blank" : undefined}
                className="inline-block rounded-full px-8 py-3 text-lg font-semibold 
                           bg-white/90 text-gray-900 hover:bg-white transition-all duration-300"
              >
                {cta.label}
              </Link>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ParallaxSection;
