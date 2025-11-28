"use client";

import { FC } from "react";
import type { AddressData } from "./hooks/useAddresses";

interface Props {
  isOpen: boolean;
  item: AddressData | null;
  onClose: () => void;
  onSave: () => void;
  editTitle: string;
  editAddress: string;
  editPhone: string;
  setEditTitle: (v: string) => void;
  setEditAddress: (v: string) => void;
  setEditPhone: (v: string) => void;
}

const AddressEdit: FC<Props> = ({
  isOpen,
  item,
  onClose,
  onSave,
  editTitle,
  editAddress,
  editPhone,
  setEditTitle,
  setEditAddress,
  setEditPhone,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-9999">
      <div className="bg-white p-6! rounded-2xl border border-narla-beige shadow-xl w-full max-w-lg">
        
        <h2 className="text-2xl font-semibold text-narla-black mb-4!">
          Adresi Düzenle
        </h2>

        <div className="space-y-4">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="px-1! border rounded-xl w-full mb-3!"
          />

          <textarea
            value={editAddress}
            onChange={(e) => setEditAddress(e.target.value)}
            className="px-1! border rounded-xl w-full mb-3!"
          />

          <input
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
            className="px-1! border rounded-xl w-full mb-3!"
          />

          <div className="flex gap-4 mt-6">
            <button
              onClick={onSave}
              className="px-4! py-1! mt-3! bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              Kaydet
            </button>

            <button
              onClick={onClose}
              className="px-4! py-1! mt-3! bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition"
            >
              İptal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddressEdit;
