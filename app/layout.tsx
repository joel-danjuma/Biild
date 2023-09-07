import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biild Co",
  description: "Next Generation Applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:text-white text-[#232323]`}>
        <div className="dark:bg-[#232323] main">
          <div className="gradient " />
        </div>
        {children}
      </body>
    </html>
  );
}
