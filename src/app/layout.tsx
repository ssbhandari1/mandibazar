import type { Metadata } from "next";
import "./globals.css";
import { RootProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: "Mandi",
  description: "easy to buy anything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>
          <RootProvider>{children}</RootProvider>
        </main>
      </body>
    </html>
  );
}
