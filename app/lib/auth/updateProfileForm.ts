"use client";

import { auth, db } from "@/app/lib/firebase";
import { updateProfile, updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

interface ProfileFormData {
  name?: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  gender?: string;
  bio?: string;
  city?: string;
  country?: string;
}

export async function updateProfileForm(data: ProfileFormData) {
  const user = auth.currentUser;
  if (!user) return { ok: false, error: "Kullanıcı bulunamadı" };

  try {
    // 1) AUTH KISMI → displayName ve email güncellemesi
    if (data.name && data.name !== user.displayName) {
      await updateProfile(user, { displayName: data.name });
    }

    if (data.email && data.email !== user.email) {
      await updateEmail(user, data.email);
    }

    // 2) FIRESTORE KISMI → diğer ek alanların güncellenmesi
    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      ...(data.name && { name: data.name }),
      ...(data.email && { email: data.email }),
      ...(data.phone && { phone: data.phone }),
      ...(data.birthDate && { birthDate: data.birthDate }),
      ...(data.gender && { gender: data.gender }),
      ...(data.bio && { bio: data.bio }),
      ...(data.city && { city: data.city }),
      ...(data.country && { country: data.country }),
      updatedAt: new Date(),
    });

    return { ok: true };
  } catch (error) {
    console.error("Profil güncelleme hatası:", error);
    return { ok: false, error };
  }
}
