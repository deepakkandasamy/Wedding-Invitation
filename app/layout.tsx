import type { Metadata } from "next";
import { Cormorant_Garamond, Parisienne } from "next/font/google";
import "./global.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: "Ashwarya & Deepak | Wedding Invitation",
  description: "Join us as we celebrate our wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${parisienne.variable}`}>
      <body>{children}</body>
    </html>
  );
}

