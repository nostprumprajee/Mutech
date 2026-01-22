import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PaidSync } from "./components/PaidSync"; // 👈 เพิ่ม

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mutech – IP มงคล & API",
  description: "วิเคราะห์ IP มงคล และใช้งานผ่าน API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* sync localStorage -> cookie สำหรับ middleware */}
        <PaidSync />

        {children}
      </body>
    </html>
  );
}
