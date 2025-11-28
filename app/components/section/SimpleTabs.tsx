"use client";

import { useState } from "react";
import clsx from "clsx";
import { SimpleTabsProps } from "@/app/types";


export default function SimpleTabs({ tabs, className, defaultActiveId }: SimpleTabsProps) {
  const [active, setActive] = useState(defaultActiveId ?? tabs[0]?.id);

  return (
    <div className={clsx("py-6", className)}> {/* üst ve alt boşluk */}
      {/* başlıklar */}
      <div className="flex flex-wrap items-center justify-start border-b gap-x-10 gap-y-3 pb-3 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={clsx(
              "px-6 py-2 text-base font-medium tracking-wide transition-all duration-300",
              active === t.id
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* içerik */}
      <div className="pt-2">
        {tabs.map((t) => (
          <div key={t.id} className={clsx(active === t.id ? "block" : "hidden")}>
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
