"use client";

import React, { FC, useEffect, useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { registerUser } from "@/app/lib/auth/registerUser";
import { notifyError, notifySuccess, notifyWarning } from "@/app/Notification";
import { useAuth } from "@/app/lib/auth/AuthContext";
import { useRouter } from "next/navigation";
import { auth } from "@/app/lib/firebase";

interface Props {
  onClose: () => void;
  onOpenLogin?: () => void;
  isOpen?: boolean;
}

const AccountPanelRegister: FC<Props> = ({ onClose, onOpenLogin, isOpen }) => {
  const { setFirstTimeRegister } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setErrorMsg("");
      setShowPassword(false);
      setShowPassword2(false);
    }
  }, [isOpen]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !password2) {
      notifyWarning("Lütfen tüm alanları doldurun.");
      return;
    }

    if (password !== password2) {
      notifyWarning("Şifreler aynı değil.");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg("");

      const uid = await registerUser({ name, email, password });

      // ⭐ REGISTER → UID LOCALSTORAGE’A YAZ
      localStorage.setItem("uid", uid);

      notifySuccess("Kayıt başarılı! 🎉");

      setFirstTimeRegister(true);

      onClose();

      setTimeout(() => {
        router.push("/account");
      }, 100);

    } catch (err) {
      const error = err instanceof Error ? err : new Error("Kayıt sırasında hata oluştu");
      notifyError(error.message);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end">
      <div className="h-screen w-[420px] max-w-[90%] bg-[rgba(223,185,181,1)] shadow-2xl p-10! animate-slideInRight flex flex-col gap-6">
        <div className="flex items-center justify-end">
          <button onClick={onClose} className="p-2 hover:opacity-70">
            <X size={22} />
          </button>
        </div>

        {errorMsg && (
          <div className="text-red-700 text-sm bg-red-100 p-3 rounded-lg">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label>Ad Soyad</label>
            <input
              className="p-3 border rounded-lg bg-white px-2!"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>E-posta</label>
            <input
              className="p-3 border rounded-lg bg-white px-2!"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label>Şifre</label>
            <input
              className="p-3 border rounded-lg bg-white px-2!"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-[42px] px-2!"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex flex-col gap-2 relative">
            <label>Şifre Tekrar</label>
            <input
              className="p-3 border rounded-lg bg-white px-2!"
              type={showPassword2 ? "text" : "password"}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-[42px] px-2!"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-var(--narla-sand) text-white py-3 rounded-lg"
          >
            {loading ? "Kaydediliyor..." : "Kayıt Ol"}
          </button>
        </form>

        <p className="text-center">
          Zaten hesabınız var mı?
          <button
            className="font-semibold text-var(--narla-sand) ml-1"
            onClick={() => {
              onClose();
              onOpenLogin?.();
            }}
          >
            Giriş Yapın
          </button>
        </p>
      </div>
    </div>
  );
};

export default AccountPanelRegister;
