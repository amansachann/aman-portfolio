import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
