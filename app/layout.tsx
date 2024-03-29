import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import Head from 'next/head'; // Import Head from next/head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Goodly Dev",
  description: "Creating Solutions",
};

export const favicon = "/favicon.ico";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
