import type { ReactNode } from "react";

/** ParallaxSection props */
export type ParallaxSectionProps = {
  image: string;                 // /public altından (örn: "/assets/5.jpg")
  heightClass?: string;          // Tailwind yükseklik (örn: "min-h-[70vh]")
  className?: string;            // Ek Tailwind sınıfları
  overlay?: number;              // 0–100 (vars: 35–40 iyi)
  align?: "start" | "center" | "end";
  title?: string;                // children VERMEZSEN hızlı içerik
  subtitle?: string;             // children VERMEZSEN hızlı içerik
  cta?: { label: string; href: string; newTab?: boolean };
  contentClassName?: string;     // içerik sarmalayıcısına ek sınıf
  children?: ReactNode;          // özel içerik istersen
};

/** SectionTitle props */
export type SectionTitleProps = {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
};

/** Basit Tabs tipleri */
export type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

export type SimpleTabsProps = {
  tabs: Tab[];
  className?: string;
  defaultActiveId?: string;
};

/** TrendContent props (opsiyonel dış konfigürasyon için) */
export type TrendContentProps = {
  title?: string;
  paragraphs?: string[];
  tabs?: Tab[];
  className?: string;
};
