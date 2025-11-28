"use client";

import { FC } from "react";
import useProfileUpdate from "./hooks/useProfileUpdate";


const ProfileForm: FC = () => {
  const {
    name,
    setName,
    email,
    phone,
    setPhone,
    birthDate,
    setBirthDate,
    gender,
    setGender,
    bio,
    setBio,
    city,
    setCity,
    country,
    setCountry,
    handleUpdate,
  } = useProfileUpdate();

  return (
    <div className="mt-10!">

      {/* Ad Soyad */}
      <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">Ad Soyad</label>
        <input
          type="text"
          className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">E-posta</label>
        <input
          type="email"
          className="p-3 border rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed px-2!"
          value={email}
          disabled
        />
      </div>

      {/* Telefon */}
      <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">Telefon</label>
        <input
          type="text"
          className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Doğum Tarihi */}
      <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">Doğum Tarihi</label>
        <input
          type="date"
          className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>

      {/* Cinsiyet */}
      {/* <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">Cinsiyet</label>
        <select
          className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="female">Kadın</option>
          <option value="male">Erkek</option>
          <option value="other">Diğer</option>
        </select>
      </div> */}

      {/* Şehir */}
      <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">Şehir</label>
        <input
          type="text"
          className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Ülke */}
      {/* <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">Ülke</label>
        <input
          type="text"
          className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2!"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div> */}

      {/* Bio */}
      <div className="flex flex-col gap-2 mb-6!">
        <label className="text-white font-medium">Hakkında</label>
        <textarea
          className="p-3 border rounded-xl bg-gray-50 focus:outline-none px-2! min-h-[100px]"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      {/* Güncelleme Butonu */}
      <button
        className="
            mt-4! w-full 
            p-2! rounded-xl 
            bg-narla-black text-white font-semibold 
            hover:bg-black transition
        "
        onClick={handleUpdate}
      >
        Bilgilerimi Güncelle
      </button>
    </div>
  );
};

export default ProfileForm;
