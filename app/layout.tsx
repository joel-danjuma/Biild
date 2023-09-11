import "./globals.css";
import Nav from "@/components/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

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
      <body className={`${inter.className}`}>
        <Providers>
          <div className="main">
            <div className="gradient " />
          </div>
          <Nav />
          <main className="scroll-smooth">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
