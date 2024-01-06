import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JOB_TITLE } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Brandon Julio Thenaro | ${JOB_TITLE}`,
  description: `Lifelong learner | ${JOB_TITLE}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto bg-slate-50 bg-gradient-to-br from-indigo-100 from-10% via-indigo-50 via-30% px-2 text-black md:px-4 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
