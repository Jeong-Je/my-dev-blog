import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JeongJe-Blog",
  description: "JeongJe의 개인 블로그입니다.",
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
        <ScrollIndicator />
        {children}
        <Footer />
      </body>
    </html>
  );
}

