"use client";

import React, { FC, createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/app/lib/firebase";


interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
  firstTimeRegister: boolean;
  setFirstTimeRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => {},
  firstTimeRegister: false,
  setFirstTimeRegister: () => {},
});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Kullanıcı ilk kez kayıt oldu mu?
  const [firstTimeRegister, setFirstTimeRegister] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const logout = () => {
    signOut(auth);
    setFirstTimeRegister(false); // logout sonrası sıfırla
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, logout, firstTimeRegister, setFirstTimeRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
