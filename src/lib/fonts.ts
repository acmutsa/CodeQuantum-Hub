import { Cal_Sans, Poppins } from "next/font/google";

export const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});
