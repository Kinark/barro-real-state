import type { Metadata } from "next";
import localFont from "next/font/local";

import Hero from "~/components/Hero";
import NestsSearcher from "~/components/NestsSearcher";
import pepperSans from "~/assets/fonts/PeppersSansFamily/pepperSans";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Barro Real State",
  description: "The best nests for you and your birdy family!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pepperSans.className}>
        <main className="flex col center gap-3">
        <Hero />
        <NestsSearcher />
        {children}
        </main>
      </body>
    </html>
  );
}
