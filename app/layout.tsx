import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noera Labs | Automated Edge Restoration",
  description:
    "Noera Technologies is building a vision-guided edge-restoration system for professional knife workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0b0b0a]">{children}</body>
    </html>
  );
}
