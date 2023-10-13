import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeong dev",
  description: "JeongJe의 개인 블로그입니다.",
  themeColor: "#232E3C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${inter.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

