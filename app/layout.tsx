import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olalekan Alabi - Portfolio 2026",
  description: "I develop top notch websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
