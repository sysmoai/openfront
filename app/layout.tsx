import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impossible Tees",
  description: "Shop our unique collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.svg" rel="icon" />
      </head>
      <body className="antialiased min-h-screen bg-background font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
