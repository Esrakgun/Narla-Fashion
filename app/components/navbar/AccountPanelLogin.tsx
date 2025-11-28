"use client";

import React, { FC, useState, useEffect } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { notifyError, notifySuccess, notifyWarning } from "@/app/Notification";
import { useAuth } from "@/app/lib/auth/AuthContext";
import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
  onOpenRegister?: () => void;
  isOpen?: boolean;
}

const AccountPanelLogin: FC<Props> = ({ onClose, onOpenRegister, isOpen }) => {
  const { setFirstTimeRegister } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setErrorMsg("");
      setShowPassword(false);
    }
  }, [isOpen]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!email || !password) {
      notifyWarning("Lütfen tüm alanları doldurun.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // ⭐ UID LOCALSTORAGE KAYDET
      localStorage.setItem("uid", firebaseUser.uid);

      notifySuccess("Giriş başarılı!");

      setFirstTimeRegister(false);

      onClose();
      router.push("/account/profile");

      setEmail("");
      setPassword("");

    } catch (err) {
      notifyError("E-posta veya şifre hatalı!");
      setErrorMsg("Giriş başarısız.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end">
      <div className="w-[420px] max-w-[90%] h-screen bg-[rgba(223,185,181,1)] shadow-2xl p-5! animate-slideInRight flex flex-col gap-8">
        <div className="flex items-center justify-end mb-4">
          <button onClick={onClose} className="p-2 rounded-md hover:opacity-70">
            <X size={22} />
          </button>
        </div>

        {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              className="p-3 rounded-lg border bg-white px-2!"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label>Şifre</label>
            <input
              className="p-3 rounded-lg border bg-white px-2!"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-[42px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-var(--narla-sand) text-white py-3 rounded-lg"
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        <p className="text-center font-medium">
          Üye değil misiniz?
          <button
            className="text-var(--narla-sand) font-semibold ml-1"
            onClick={() => {
              onClose();
              onOpenRegister?.();
            }}
          >
            Kayıt Olun
          </button>
        </p>
      </div>
    </div>
  );
};

export default AccountPanelLogin;
