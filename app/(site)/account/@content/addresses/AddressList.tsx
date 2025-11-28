"use client";

import { FC, useState } from "react";
import useAddresses, { AddressData } from "./hooks/useAddresses";
import { notifySuccess, notifyError } from "@/app/Notification";
import AddressEdit from "./AddressEdit";

const AddressList: FC = () => {
  const { addresses, deleteAddress, loading, updateAddress } = useAddresses();

  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPhone, setEditPhone] = useState("");

  if (loading) return <p>Adresler yükleniyor...</p>;

  const startEdit = (item: AddressData) => {
    setEditId(item.id!);
    setEditTitle(item.title);
    setEditAddress(item.address);
    setEditPhone(item.phone);
  };

  const handleSave = async () => {
    if (!editId) return;
    const ok = await updateAddress(editId, {
      title: editTitle,
      address: editAddress,
      phone: editPhone,
    });

    if (ok) notifySuccess("Adres güncellendi ✨");
    else notifyError("Güncellenemedi");

    setEditId(null);
  };

  return (
    <div className="space-y-6 mt-6">

      {/* MODAL */}
      <AddressEdit
        isOpen={editId !== null}
        item={addresses.find((a) => a.id === editId) || null}
        onClose={() => setEditId(null)}
        onSave={handleSave}
        editTitle={editTitle}
        editAddress={editAddress}
        editPhone={editPhone}
        setEditTitle={setEditTitle}
        setEditAddress={setEditAddress}
        setEditPhone={setEditPhone}
      />

      {addresses.map((item) => (
        <div
          key={item.id}
          className="p-4! mx-2! mb-3! bg-white/70 rounded-xl border border-narla-beige shadow-lg"
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-700">{item.address}</p>
          <p className="text-gray-600 text-sm">Tel: {item.phone}</p>

          <div className="flex gap-4! mt-4!">
            <button
              onClick={() => startEdit(item)}
              className="px-4! py-1! bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Düzenle
            </button>

            <button
              onClick={() => deleteAddress(item.id!)}
              className="px-4! py-1! bg-red-500 text-white rounded-lg hover:bg-red-700"
            >
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
