import "./globals.css";
import Footer from "@/components/common/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AuroraBackground } from "@/components/ui.aceternity/aurora-background";
import { TracingBeam } from "@/components/ui.aceternity/tracing-beam";
import { JOB_TITLE } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuroraBackground>
            {children}

            <Footer />
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
