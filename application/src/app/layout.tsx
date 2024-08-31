import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import { Footer, Sidebar } from "@cp";
import { syncDatabase } from "@lb";

import "@st/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinelan",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncDatabase();

  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Providers>
          <div className="w-full h-screen flex gap-8 dark:bg-body-bg-dark bg-body-bg-light">
            <Sidebar />
            <div className="w-[calc(100%-282px)] h-full flex flex-col gap-5 py-5 pr-5">
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
