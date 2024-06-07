import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ghnews - Site de notícias inspirado no layout do site globo.com",
  description: "Desenvolvido com NextJS e TailwindCSS",
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
