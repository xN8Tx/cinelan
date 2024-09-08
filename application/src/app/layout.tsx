import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import { Footer, Sidebar, BigModal } from "@cp";

import "@st/globals.css";
import { SmallModal } from "../components/small-modal";
import { syncDatabase } from "@md";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinelan",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //await syncDatabase();

  return (
    <html lang="en">
      <body className={`${inter.className} dark overflow-y-hidden`}>
        <Providers>
          <div className="w-full h-screen flex gap-8 dark:bg-body-bg-dark bg-body-bg-light">
            <BigModal />
            <Sidebar />
            <div className="w-full md:pl-0 md:w-[calc(100%-282px)] relative h-full flex flex-col gap-5 py-5 px-5">
              {children}
              <Footer />
              <SmallModal />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
