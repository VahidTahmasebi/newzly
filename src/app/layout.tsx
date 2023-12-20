import "./globals.css";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "American News",
  description: "American News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="my-5 text-center">
            <h1 className="text-xl font-bold">American news</h1>
          </header>
          <main className="xl:max-w-7xl container my-7 mx-auto px-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
