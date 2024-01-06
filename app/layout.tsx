import { JOB_TITLE } from "@/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Particles from "./components/particles";
import "./globals.css";

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
        className={`container mx-auto bg-white text-black dark:bg-slate-800 dark:text-white md:px-4 ${inter.className}`}
      >
        <Particles />
        {children}
      </body>
    </html>
  );
}
