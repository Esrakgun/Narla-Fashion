// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./lib/auth/AuthContext";
import "./styles/profile-bg.css";

// 🔥 Toastify yerine react-hot-toast
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "LOVE NARLA FASHION",
  description: "Her adımda zarafet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased">
        
        {/* 🔥 react-hot-toast Toaster */}
        <Toaster position="bottom-right" />

        <AuthProvider>
          {children}
        </AuthProvider>
        
      </body>
    </html>
  );
}
