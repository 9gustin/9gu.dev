import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { USER_CONFIG } from "@/config/user";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { Loader } from "@/components/Loader";

export const metadata: Metadata = {
  title: USER_CONFIG.htmlTitle,
  description: USER_CONFIG.description,
  keywords: USER_CONFIG.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(GeistSans.className, "gap-8 flex flex-col items-center")}
      >
        <Suspense fallback={<Loader />}>
          <main className="w-full flex flex-col items-center px-4 gap-8 flex-1 max-w-screen-md">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
