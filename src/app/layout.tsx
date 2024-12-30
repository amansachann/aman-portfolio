import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Welcome to Aman's Digital Space – Developer, Educator, Creator",
  description: `A sleek personal portfolio showcasing my expertise in software development, tutorials, and technical writing. Featuring projects, blogs, and insights, it reflects my passion for clean code, innovation, and impactful solutions.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          `antialiased bg-gray-900 text-white font-sans`
        )}
      >
        {children}
      </body>
    </html>
  );
}
