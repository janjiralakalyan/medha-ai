import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEDHA AI - Enterprise AI Copilot",
  description: "The AI Operating System for Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex text-zinc-900 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-950`}>
        <Sidebar />
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-8 bg-zinc-50/50 dark:bg-zinc-950/50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
