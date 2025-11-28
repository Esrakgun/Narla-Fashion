"use client";

import React, { FC, useState } from "react";
import { ChevronDown } from "lucide-react";

interface SortMenuProps {
  onSortChange?: (value: string) => void;
}

const sortOptions = [
  { label: "Varsayılan Sıralama", value: "default" },
  { label: "Fiyat: Düşükten Yükseğe", value: "price-asc" },
  { label: "Fiyat: Yüksekten Düşüğe", value: "price-desc" },
  { label: "En Yeniler", value: "latest" },
  { label: "En Çok Satanlar", value: "bestseller" },
];

const SortMenu: FC<SortMenuProps> = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);

  const handleSelect = (option: { label: string; value: string }) => {
    setSelected(option);
    setIsOpen(false);
    onSortChange?.(option.value);
  };

  return (
    <div className="relative w-52 md:w-60 mx-[-5]!">

      {/* BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full px-4! py-2!
          border border-gray-300! rounded-lg!
          flex items-center justify-between!
          bg-white text-sm md:text-base
          shadow-sm hover:shadow-md transition
        "
      >
        {selected.label}
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <ul
          className="
            absolute left-0 mt-2 w-full
            bg-white border border-gray-200!
            rounded-lg! shadow-lg! z-20 overflow-hidden
          "
        >
          {sortOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="
                px-4! py-2!
                text-sm md:text-base cursor-pointer
                hover:bg-gray-100 transition
              "
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default SortMenu;
