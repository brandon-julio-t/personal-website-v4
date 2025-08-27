import Footer from "@/components/common/footer";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { JOB_TITLE } from "@/config";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = localFont({
  src: [
    {
      path: "./CommitMonoV143/CommitMono-400-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CommitMonoV143/CommitMono-400-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./CommitMonoV143/CommitMono-700-Regular.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./CommitMonoV143/CommitMono-700-Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-mono",
});

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
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}

            <Footer />
          </ThemeProvider>

          <SpeedInsights />
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
