"use client";

import { useState } from "react";
import { useAuth } from "@/app/lib/auth/AuthContext";
import { notifySuccess, notifyError } from "@/app/Notification";
import { updateProfileForm } from "@/app/lib/auth/updateProfileForm";

export default function useProfileUpdate() {
  const { user } = useAuth();

  // DEFAULT KULLANICI BİLGİLERİ
  const defaultName =
    user?.displayName || user?.email?.split("@")[0] || "";

  const [name, setName] = useState(defaultName);
  const [email] = useState(user?.email || "");

  // 🔥 YENİ EKLENEN ALANLAR
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // GÜNCELLEME İŞLEMİ
  const handleUpdate = async () => {
    const result = await updateProfileForm({
      name,
      email,
      phone,
      birthDate,
      gender,
      bio,
      city,
      country,
    });

    if (result.ok) {
      notifySuccess("Profil bilgileri güncellendi ✨");
    } else {
      notifyError("Güncelleme sırasında hata oluştu 😢");
    }
  };

  return {
    name,
    setName,
    email,

    // Yeni alanlar
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

    // Güncelleme fonksiyonu
    handleUpdate,
  };
}
