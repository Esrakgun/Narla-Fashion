"use client";

import React, { FC } from "react";
import { X } from "lucide-react";
import { narlaColors } from "@/app/data/colorPalette";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

// 🎨 NARLA 8'li MASTER SKIN TONE PALETI (14 fotoğraftan)
const colors = [
  narlaColors.nudeLight,
  narlaColors.nudeMedium,
  narlaColors.nudeDeep,
  narlaColors.mocha,
  narlaColors.espresso,
  narlaColors.graphite,
  narlaColors.black,
];

const sizes = ["S", "M", "L", "XL"];

const deniers = ["20D", "40D", "60D", "80D", "100D"];

const FilterPanel: FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* BACKDROP */}
      <div
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* PANEL */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[85%] sm:w-[350px]
          bg-white z-50 p-6 overflow-y-auto
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold tracking-tight">Filtreler</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* COLORS */}
        <div className="mb-8">
          <h3 className="text-base font-medium mb-3">Renk</h3>
          <div className="flex flex-wrap gap-3">
            {colors.map((c, idx) => (
              <span
                key={idx}
                className="
                  w-8 h-8 rounded-full border border-gray-300 
                  shadow-sm cursor-pointer 
                  hover:scale-110 transition
                "
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        {/* SIZE */}
        <div className="mb-8">
          <h3 className="text-base font-medium mb-3">Beden</h3>
          <div className="grid grid-cols-4 gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                className="
                  border border-gray-300 rounded-md py-2 text-center text-sm
                  hover:border-black hover:bg-black hover:text-white
                  transition duration-200
                "
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* DENIER */}
        <div className="mb-8">
          <h3 className="text-base font-medium mb-3">Kalınlık (DEN)</h3>
          <div className="grid grid-cols-3 gap-3">
            {deniers.map((den) => (
              <button
                key={den}
                className="
                  border border-gray-300 rounded-md py-2 text-center text-sm
                  hover:border-black hover:bg-black hover:text-white
                  transition duration-200
                "
              >
                {den}
              </button>
            ))}
          </div>
        </div>

        {/* PRICE RANGE */}
        <div className="mb-8">
          <h3 className="text-base font-medium mb-3">Fiyat Aralığı</h3>
          <div className="flex items-center gap-4">
            <input
              type="number"
              placeholder="Min"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col gap-4">
          <button className="w-full bg-black text-white py-3 rounded-lg text-sm tracking-wide">
            Filtreleri Uygula
          </button>

          <button className="w-full text-sm text-gray-600 underline">
            Filtreleri Temizle
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterPanel;
