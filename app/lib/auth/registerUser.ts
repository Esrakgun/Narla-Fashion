
import { auth, db } from "@/app/lib/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

/**
 * Firebase kullanıcı oluşturma + Firestore profil kaydı
 */
export async function registerUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    // 1) Firebase Authentication — kullanıcı oluştur
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 2) Firestore profil kaydı
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      createdAt: new Date(),
    });

    return user.uid; // başarı
  } catch (error) {
    // Hata fırlat → Panel doğru görsün
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Kayıt sırasında bir hata oluştu.");
  }
}
