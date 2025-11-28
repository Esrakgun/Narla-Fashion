// app/lib/auth/updatePofiler.ts

import { updateProfile, updateEmail } from "firebase/auth";
import { auth } from "../firebase";

export const updateUserInfo = async (newName: string, newEmail: string) => {
  const user = auth.currentUser;
  if (!user) return false;

  try {
    if (newName) {
      await updateProfile(user, { displayName: newName });
    }

    if (newEmail && newEmail !== user.email) {
      await updateEmail(user, newEmail);
    }

    return true;
  } catch (error) {
    console.error("Profil güncelleme hatası:", error);
    return false;
  }
};
