import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saksham Sapkota - Final Year Computer Engineering Student",
  description:
    "Portfolio of Saksham Sapkota - AI/ML enthusiast, Computer Engineering student at IOE Pulchowk Campus, ranked top 10 in IOE Entrance 2078.",
  keywords: "Saksham Sapkota, AI, Machine Learning, Computer Engineering, IOE Pulchowk, Deep Learning, Portfolio, IOE Portfolio,IOE Pulchowk Campus BCT, Computer Engineering Nepal",
  authors: [{ name: "Saksham Sapkota" }],
  openGraph: {
    title: "Saksham Sapkota - Computer Engineering Student",
    description: "AI/ML enthusiast with strong academic foundation and practical project experience",
    type: "website",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
