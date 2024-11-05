import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ReduxProvider } from "@/components/ReduxProvider";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FakeStore",
  description: "Store for fake products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
