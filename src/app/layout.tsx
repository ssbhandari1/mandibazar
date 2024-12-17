import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Providers } from "./providers";
import { RootProvider } from "@/components/providers";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
      <body
        className={`antialiased`}
      >
        <main>
          <RootProvider>
            {children}
          </RootProvider>
        </main>
      </body>
    </html>
  );
}
