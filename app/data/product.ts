import { Product } from "../types/product";
import { narlaColors } from "../data/colorPalette";

export const products: Product[] = [

  // 1 — Narla Sheer (Nude Light / Medium / Deep)
  {
    id: "narla-001",
    title: "Narla Sheer – Nude Series",
    slug: "narla-sheer-nude",
    price: 349,
    image: "/shop/1.PNG",
    images: ["/shop/1.PNG", "/shop/4.PNG", "/shop/6.PNG"],
    colors: [narlaColors.nudeLight, narlaColors.nudeMedium, narlaColors.nudeDeep],
    colorImages: {
      [narlaColors.nudeLight]: ["/shop/10.PNG", "/shop/9.PNG"],
      [narlaColors.nudeMedium]: ["/shop/1.PNG", "/shop/2.PNG"],
      [narlaColors.nudeDeep]: ["/shop/3.PNG"],
    },
    sizes: ["S", "M", "L", "XL"],
    category: "fashion-addicted",
    isLatest: true,
    isBestseller: false,
    description:
      "Ultra ince dokusu ve doğal nude tonları ile her ten rengine uyum sağlayan kusursuz görünüm.",
    composition: "85% Polyamide, 15% Elastane",
    care: "Elde yıkayınız. Kurutma makinesi kullanmayınız.",
  },

  // 2 — Narla Matte
  {
    id: "narla-002",
    title: "Narla Matte – Warm Tones",
    slug: "narla-matte",
    price: 369,
    image: "/shop/7.PNG",
    images: ["/shop/7.PNG", "/shop/10.PNG", "/shop/13.PNG"],
    colors: [narlaColors.nudeDeep, narlaColors.mocha, narlaColors.espresso],
    colorImages: {
      [narlaColors.nudeDeep]: ["/shop/3.PNG"],
      [narlaColors.mocha]: ["/shop/6.PNG", "/shop/7.PNG", "/shop/11.PNG", "/shop/12.PNG"],
      [narlaColors.espresso]: ["/shop/5.PNG"],
    },
    sizes: ["S", "M", "L"],
    category: "fashion-addicted",
    isLatest: false,
    isBestseller: true,
    description:
      "Doğal sıcak tonları ile mat ve pürüzsüz bitiş sunan premium kapatıcılık.",
    composition: "85% Polyamide, 15% Elastane",
    care: "Elde yıkayınız.",
  },

  // 3 — Narla Soft
  {
    id: "narla-003",
    title: "Narla Soft – Everyday Comfort",
    slug: "narla-soft",
    price: 389,
    image: "/shop/10.PNG",
    images: ["/shop/10.PNG", "/shop/11.PNG", "/shop/9.PNG"],
    colors: [narlaColors.nudeLight, narlaColors.nudeMedium, narlaColors.nudeDeep],
    colorImages: {
      [narlaColors.nudeLight]: ["/shop/10.PNG", "/shop/9.PNG"],
      [narlaColors.nudeMedium]: ["/shop/1.PNG", "/shop/2.PNG"],
      [narlaColors.nudeDeep]: ["/shop/3.PNG"],
    },
    sizes: ["S", "M", "L", "XL"],
    category: "fashion-addicted",
    isLatest: true,
    isBestseller: false,
    description:
      "Yumuşak dokusu ve doğal nude geçişleri ile günlük şıklığı tamamlar.",
    composition: "85% Polyamide, 15% Elastane",
    care: "Elde yıkayınız.",
  },

  // 4 — Narla Opaque
  {
    id: "narla-004",
    title: "Narla Opaque – Deep Coverage",
    slug: "narla-opaque",
    price: 459,
    image: "/shop/12.PNG",
    images: ["/shop/12.PNG", "/shop/14.PNG", "/shop/13.PNG"],
    colors: [narlaColors.graphite, narlaColors.black, narlaColors.espresso],
    colorImages: {
      [narlaColors.graphite]: ["/shop/14.PNG"],
      [narlaColors.black]: ["/shop/13.PNG", "/shop/4.PNG", "/shop/8.PNG"],
      [narlaColors.espresso]: ["/shop/5.PNG"],
    },
    sizes: ["S", "M", "L"],
    category: "trendsetter",
    isLatest: true,
    isBestseller: false,
    description:
      "Yoğun opak kapatıcılık ve şehir tonları ile güçlü bir görünüm.",
    composition: "90% Polyamide, 10% Elastane",
    care: "Elde yıkayınız, sererek kurutunuz.",
  },

  // 5 — Narla Sculpt
  {
    id: "narla-005",
    title: "Narla Sculpt – Shaping Series",
    slug: "narla-sculpt",
    price: 529,
    image: "/shop/13.PNG",
    images: ["/shop/13.PNG", "/shop/6.PNG", "/shop/14.PNG"],
    colors: [narlaColors.black],
    colorImages: {
      [narlaColors.black]: ["/shop/13.PNG", "/shop/4.PNG", "/shop/8.PNG"],
    },
    sizes: ["S", "M", "L", "XL"],
    category: "boss",
    isLatest: false,
    isBestseller: true,
    description:
      "Vücudu toparlayan yapısı ile estetik bir siluet sunar.",
    composition: "82% Polyamide, 18% Elastane",
    care: "Elde yıkayınız.",
  },

  // 6 — Narla Classic Black
  {
    id: "narla-006",
    title: "Narla Classic – Dark Essentials",
    slug: "narla-classic-dark",
    price: 399,
    image: "/shop/14.PNG",
    images: ["/shop/14.PNG", "/shop/12.PNG", "/shop/13.PNG"],
    colors: [narlaColors.black, narlaColors.graphite],
    colorImages: {
      [narlaColors.black]: ["/shop/13.PNG", "/shop/4.PNG", "/shop/8.PNG"],
      [narlaColors.graphite]: ["/shop/14.PNG"],
    },
    sizes: ["S", "M", "L"],
    category: "trendsetter",
    isLatest: false,
    isBestseller: true,
    description:
      "Koyu tonların modern görünümünü sunar.",
    composition: "90% Polyamide, 10% Elastane",
    care: "Elde yıkayınız.",
  },

  // 7 — Narla Essential Nude
  {
    id: "narla-007",
    title: "Narla Essential – Natural Nudes",
    slug: "narla-essential-nude",
    price: 359,
    image: "/shop/3.PNG",
    images: ["/shop/3.PNG", "/shop/4.PNG", "/shop/7.PNG"],
    colors: [narlaColors.nudeLight, narlaColors.nudeMedium],
    colorImages: {
      [narlaColors.nudeLight]: ["/shop/10.PNG", "/shop/9.PNG"],
      [narlaColors.nudeMedium]: ["/shop/1.PNG", "/shop/2.PNG"],
    },
    sizes: ["S", "M", "L", "XL"],
    category: "fashion-addicted",
    isLatest: false,
    isBestseller: false,
    description:
      "Her ten rengine uyum sağlayan doğal nude skalası.",
    composition: "85% Polyamide, 15% Elastane",
    care: "Elde yıkayınız.",
  },

  // 8 — Narla Ultra Sheer
  {
    id: "narla-008",
    title: "Narla Ultra Sheer – Invisible Finish",
    slug: "narla-ultra-sheer",
    price: 329,
    image: "/shop/11.PNG",
    images: ["/shop/2.PNG", "/shop/5.PNG", "/shop/6.PNG"],
    colors: [narlaColors.mocha, narlaColors.nudeMedium, narlaColors.nudeDeep],
    colorImages: {
      [narlaColors.mocha]: ["/shop/6.PNG", "/shop/7.PNG", "/shop/11.PNG", "/shop/12.PNG"],
      [narlaColors.nudeMedium]: ["/shop/1.PNG", "/shop/2.PNG"],
      [narlaColors.nudeDeep]: ["/shop/3.PNG"],
    },
    sizes: ["S", "M", "L"],
    category: "fashion-addicted",
    isLatest: false,
    isBestseller: false,
    description:
      "Cilt üzerinde yokmuş gibi duran ultra ince görünüm.",
    composition: "85% Polyamide, 15% Elastane",
    care: "Elde yıkayınız.",
  }
];
