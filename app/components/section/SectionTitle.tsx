import { SectionTitleProps } from "@/app/types";



export default function SectionTitle({ title, subtitle, light, className }: SectionTitleProps) {
  return (
    <div className={`${light ? "text-white" : "text-gray-900"} text-center ${className ?? ""}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg md:text-xl opacity-90 text-white!">{subtitle}</p>}
    </div>
  );
}
