import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { fontSans, fontMono } from "@/lib/fonts";
import { NuqsAdapter } from "nuqs/adapters/next";

export const metadata: Metadata = {
  title: "Magicmarket",
  description: "Your one-stop shop for all things Magic: The Gathering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NuqsAdapter>{children}</NuqsAdapter>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
