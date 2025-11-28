"use client";

import { FC, useState } from "react";

import { notifySuccess, notifyError } from "@/app/Notification";
import useAddresses, { AddressData } from "./hooks/useAddresses";

const AddressForm: FC = () => {
  const { addAddress } = useAddresses();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !address || !phone) {
      notifyError("Lütfen tüm alanları doldurun.");
      return;
    }

    const newAddress: Omit<AddressData, "id"> = {
      title,
      address,
      phone,
      createdAt: new Date().toISOString(),
    };

    const ok = await addAddress(newAddress);

    if (ok) {
      notifySuccess("Adres başarıyla eklendi ✨");
      setTitle("");
      setAddress("");
      setPhone("");
    } else {
      notifyError("Adres eklenirken bir hata oluştu.");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-8! p-6 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold text-narla-black mt-2! mb-2!">
          Yeni Adres Ekle
        </h2>

        {/* Başlık */}
        <div className="flex flex-col gap-4!">
          <label className="text-white font-medium px-1!">Adres Başlığı</label>
          <input
            type="text"
            className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
            placeholder="Ev, İş, Yazlık..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Açık Adres */}
        <div className="flex flex-col gap-2 mt-1!">
          <label className="text-white  font-medium px-1!">Açık Adres</label>
          <textarea
            className="p-3 border rounded-xl bg-gray-50 focus:outline-none min-h-80px px-2!"
            placeholder="İstanbul Kadıköy..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Telefon */}
        <div className="flex flex-col gap-2! mt-1!">
          <label className="text-white  font-medium px-1!">Telefon</label>
          <input
            type="text"
            className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
            placeholder="0555 555 55 55"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          type="submit"
         className="w-full p-1! mt-5! mb-5! rounded-xl bg-narla-black text-white font-semibold hover:bg-black transition"
        >
          Adresi Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
