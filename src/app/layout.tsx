import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/ui/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Makarand",
  metadataBase: new URL('https://makarandmadhavi.me'),
  description: "Makarand Madhavi's personal website",
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta property="og:title" content="Makarand" />
        <meta property="og:description" content="Makarand Madhavi's personal website" />
        <meta property="og:url" content="https://makarandmadhavi.me/" />
        <meta property="og:image" content="https://makarandmadhavi.me/opengraph-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        <video id="background-video" autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4"/>
        </video>

        {children}
      </body>
    </html>
  );
}
