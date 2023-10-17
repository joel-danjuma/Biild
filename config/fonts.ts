import { Fira_Sans as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500"],
});
