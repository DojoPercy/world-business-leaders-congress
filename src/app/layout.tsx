import type { Metadata } from "next";
import { Montserrat, Inter } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "World Business Leaders Congress 2025 | Dubai, UAE",
  description: "Business Beyond Profit: Shaping a Sustainable and Equitable Future. Join visionary leaders at WBLC 2025, 15th-19th December in Dubai.",
  keywords: ["business leadership", "congress", "Dubai", "sustainability", "business leaders", "WBLC 2025"],
  openGraph: {
    title: "World Business Leaders Congress 2025",
    description: "Business Beyond Profit: Shaping a Sustainable and Equitable Future",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-off-white text-charcoal">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
