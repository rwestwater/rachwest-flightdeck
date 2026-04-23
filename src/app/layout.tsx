import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RachWest Flight Deck",
  description: "Portfolio showcasing 10+ years in tech, leadership, and full-stack development",
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
